import { useEffect, useRef, useState } from "react";

export const useElement = (options) => {
  const containerRef = useRef();
  const [isVisible, setIsvisible] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    console.log(entry);
    setIsvisible(entry.isIntersecting);
  };

  useEffect(() => {
    console.log(containerRef.current);
    const observer = new IntersectionObserver(callBackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};

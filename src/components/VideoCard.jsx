import React, { useEffect, useRef, useState } from "react";
// import "../assets/styles/videoCard.css";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
import useElementOnScreen from "../hook/ElementOnScreen";
const SvideoCard = ({ src, profileImage, profileName, caption, id, likes }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisibile) {
      if (!isVideoPlaying) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    } else {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  }, [isVisibile]);
  return (
    <div className="videoCard">
      <Stamps likes={likes} id={id} />
      <VideoInfo
        profileName={profileName}
        profileImage={profileImage}
        caption={caption}
      />
      <video
        ref={videoRef}
        loop
        preload="true"
        onClick={onVideoPress}
        className="videoCard__player"
        src={src}
      />
    </div>
  );
};

export default SvideoCard;

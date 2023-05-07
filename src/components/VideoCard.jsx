import React, { useEffect, useRef, useState } from "react";
// import "../assets/styles/videoCard.css";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
import useElementOnScreen from "../hook/ElementOnScreen";
import ReactPlayer from "react-player";
const VideoCard = ({ src, profileImage, profileName, caption, id, likes }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);
  const onVideoPress = () => {
    // if (isVideoPlaying) {
    //   videoRef.current.pause();
    //   setIsVideoPlaying(false);
    // } else {
    //   videoRef.current.play();
    //   setIsVideoPlaying(true);
    // }
    setIsVideoPlaying((prev) => !prev);
  };
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5,
  // };
  // const isVisibile = useElementOnScreen(options, videoRef);

  // useEffect(() => {
  //   if (isVisibile) {
  //     if (!isVideoPlaying) {
  //       videoRef.current.play();
  //       setIsVideoPlaying(true);
  //     }
  //   } else {
  //     if (isVideoPlaying) {
  //       videoRef.current.pause();
  //       setIsVideoPlaying(false);
  //     }
  //   }
  // }, [isVisibile]);
  return (
    <div className="videoCard">
      <Stamps likes={likes} id={id} />
      <VideoInfo
        profileName={profileName}
        profileImage={profileImage}
        caption={caption}
      />
      <div ref={videoRef}>
        <ReactPlayer
          playsInline
          muted
          loop
          playing={isVideoPlaying}
          preload="true"
          width="100%"
          height="100%"
          onClick={onVideoPress}
          // className="videoCard__player"
          // style={{ width: "100%", height: "100%", objectFit: "cover" }}
          url={src}
        />
      </div>
    </div>
  );
};

export default VideoCard;

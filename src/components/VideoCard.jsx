import React, { useRef, useState } from "react";
import "../assets/styles/videoCard.css";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
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
        onClick={onVideoPress}
        className="videoCard__player"
        src={src}
        loop
      />
    </div>
  );
};

export default SvideoCard;

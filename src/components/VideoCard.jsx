import React, { Suspense, useEffect, useRef, useState } from "react";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
import useElementOnScreen from "../hook/ElementOnScreen";
const VideoCard = ({ src, profileImage, profileName, caption, id, likes }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

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
    threshold: 0.5,
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
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className="videoCard"
        onClick={() => setShowControls((prev) => !prev)}
      >
        <Stamps likes={likes} id={id} />
        <VideoInfo
          profileName={profileName}
          profileImage={profileImage}
          caption={caption}
        />

        <video
          ref={videoRef}
          playsInline
          muted
          loop
          controls={showControls}
          preload="true"
          onClick={onVideoPress}
          className="videoCard__player"
          src={src}
          type="video/mp4"
        />
      </div>
    </Suspense>
  );
};

export default VideoCard;

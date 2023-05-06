import React, { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player";

import "./image.css";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
import { useElement } from "../hook/ElementOnScreen";

const VideoCard = ({ videos }) => {
  const [controls, setControls] = useState(false);

  const addControl = () => {
    setControls((prev) => !prev);
  };

  const [containerRef, isVisible] = useElement({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  console.log(isVisible);
  return (
    <>
      {videos?.map(
        ({ URL, id, profileName, caption, profileImage, likes }, idx) => {
          console.log(id);
          return (
            <div
              ref={containerRef}
              key={idx}
              className="relative"
              onClick={addControl}
            >
              <Stamps onClick={() => getLike(id)} id={id} likes={likes} />
              <VideoInfo
                profileName={profileName}
                caption={caption}
                profileImage={profileImage}
              />

              <ReactPlayer
                loop={true}
                playing={false}
                muted={true}
                controls={controls}
                width="100%"
                height="100%"
                url={URL}
              />
            </div>
          );
        }
      )}
    </>
  );
};

export default VideoCard;

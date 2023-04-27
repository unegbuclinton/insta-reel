import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, likeAPost } from "../redux/DashboardSlice";
import "./image.css";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
import { useElement } from "../hook/ElementOnScreen";

const VideoCard = ({ videos }) => {
  const [controls, setControls] = useState(false);

  const addControl = () => {
    setControls((prev) => !prev);
  };
  const { userData } = useSelector((state) => state.dashboard);
  const { limit, nextTime } = userData;
  const dispatch = useDispatch();
  const [forLike, setForLike] = useState(false);
  const formatDate = dayjs(nextTime).format("ddd DD/MM hh:mm");
  const getLike = (id) => {
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      dispatch(getUserData());
      if (!limit) return;
      toast.error(
        `You have reached your 100 likes daily limit! Come back at ${formatDate}`
      );
    });
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
              <Stamps
                onClick={() => getLike(id)}
                likes={likes}
                onLike={forLike}
              />
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

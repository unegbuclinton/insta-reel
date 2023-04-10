import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
// import { DPIconFilledHeart, DPIconHeart } from "../assets/images/icons";
import { getUserData, likeAPost } from "../redux/DashboardSlice";
import "./image.css";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
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
    console.log(id);
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      dispatch(getUserData());
      if (!limit) return;
      toast.error(
        `You have reached your 100 likes daily limit! Come back at ${formatDate}`
      );
    });
  };
  // const [shouldPlay, setShouldPlay] = useState(false);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   let options = {
  //     rootMargin: "0px",
  //     threshold: [0.25, 0.75],
  //   };

  //   let handlePlay = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setShouldPlay(true);
  //       } else {
  //         setShouldPlay(false);
  //       }
  //     });
  //   };

  //   let observer = new IntersectionObserver(handlePlay, options);

  //   observer.observe(videoRef.current);
  //   return () => {
  //     if (videoRef.current) {
  //       observer.unobserve(videoRef.current);
  //     }
  //   };
  // });

  return (
    <>
      {videos?.map(
        ({ URL, id, profileName, caption, profileImage, likes }, idx) => {
          return (
            <div key={idx} className="relative" onClick={addControl}>
              <Stamps onClick={() => getLike(id)} likes={likes} />
              <VideoInfo
                profileName={profileName}
                caption={caption}
                profileImage={profileImage}
              />
              <ReactPlayer
                loop={true}
                // playing={true}
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

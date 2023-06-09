import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboardlayout from "../components/Dashboardlayout";
import VideoCard from "../components/VideoCard";
import { ImSpinner2 } from "react-icons/im";
import { uploadProfilesVideos } from "../redux/DashboardSlice";
import LazyLoad from "react-lazy-load";
import video1 from "../assets/videos/video1.webm";
import video2 from "../assets/videos/video2.webm";
import video3 from "../assets/videos/video3.webm";
import video4 from "../assets/videos/video4.webm";
import video5 from "../assets/videos/video5.webm";

const Dashboard = () => {
  const listener = useRef(true);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      dispatch(uploadProfilesVideos(pageNumber));
    }
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const videos = [
    {
      URL: video1,
    },
    {
      URL: video2,
    },
    {
      URL: video3,
    },
    {
      URL: video4,
    },
    {
      URL: video5,
    },
  ];

  return (
    <Dashboardlayout>
      {videos?.map(
        ({ URL, id, profileName, caption, profileImage, likes }, idx) => {
          return (
            <LazyLoad height="100%" key={idx} offset={100} once>
              <VideoCard
                src={URL}
                id={id}
                profileImage={profileImage}
                caption={caption}
                profileName={profileName}
                likes={likes}
              />
            </LazyLoad>
          );
        }
      )}
      <div className="flex justify-center">
        {isLoading && <ImSpinner2 className="mb-5 animate-spin" />}
      </div>
    </Dashboardlayout>
  );
};

export default Dashboard;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboardlayout from "../components/Dashboardlayout";
import VideoCard from "../components/VideoCard";
import { ImSpinner2 } from "react-icons/im";
import { uploadProfilesVideos } from "../redux/DashboardSlice";

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

  return (
    <Dashboardlayout>
      {profiles?.map(
        ({ URL, id, profileName, caption, profileImage, likes }, idx) => {
          return (
            <VideoCard
              key={idx}
              src={URL}
              id={id}
              profileImage={profileImage}
              caption={caption}
              profileName={profileName}
              likes={likes}
            />
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

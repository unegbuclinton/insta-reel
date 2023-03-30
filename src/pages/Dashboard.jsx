import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import Dashboardlayout from "../components/Dashboardlayout";
import Stamps from "../components/Stamps";
import VideoCard from "../components/VideoCard";
// import ImageCard from "../components/ImageCard";

import {
  pageCounter,
  updateProfilesList,
  uploadProfiles,
} from "../redux/DashboardSlice";
import "./pages.css";
const Dashboard = () => {
  const [isFetching, setIsFetching] = useState(false);
  const listener = useRef(true);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );

  // const dispatch = useDispatch();
  // const increase = () => {
  //   dispatch(pageCounter());
  //   setIsFetching(false);
  // };
  // useEffect(() => {
  //   if (listener.current) {
  //     listener.current = false;
  //     dispatch(uploadProfiles(pageNumber));
  //   }
  //   const timer = setTimeout(() => {}, 1000);
  //   return () => clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const divRef = useRef(null);
  // const handleScroll = () => {
  //   const container = divRef.current;
  //   const scrollTop = container.scrollTop;
  //   const clientHeight = container.clientHeight;
  //   const scrollHeight = container.scrollHeight;
  //   const isAtBottom = scrollTop + clientHeight + 500 >= scrollHeight - 30;
  //   if (isAtBottom && !isLoading) {
  //     increase();
  //     dispatch(updateProfilesList(pageNumber));
  //   }
  // };

  const videos = [
    {
      urls: "https://files.fullstack.edu.vn/f8-tiktok/videos/1943-6421d2e76fe61.mp4",
    },
    {
      urls: "https://files.fullstack.edu.vn/f8-tiktok/videos/1946-6423383dcf32e.mp4",
    },
    {
      urls: "http://files.fullstack.edu.vn/f8-tiktok/videos/1947-64235df74f87f.mp4",
    },
    {
      urls: "https://files.fullstack.edu.vn/f8-tiktok/videos/1944-642288e7364d8.mp4",
    },
  ];
  return (
    <Dashboardlayout>
      {isLoading ? (
        <div className="flex flex-col justify-center h-screen">
          <SyncLoader color="#af00ff" loading={true} size={10} />
        </div>
      ) : (
        <div
          // ref={divRef}
          // onScroll={handleScroll}
          className="layout mb-[4rem] overflow-auto"
        >
          <VideoCard videos={videos} />
        </div>
      )}
    </Dashboardlayout>
  );
};

export default Dashboard;

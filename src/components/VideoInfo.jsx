import React from "react";
import profile from "../assets/images/img1.jpg";
const VideoInfo = ({ profileName }) => {
  return (
    <div className="absolute bottom-28 left-2 font-light text-white text-[9px] max-w-[205px]">
      <div className="flex gap-1 items-center mb-1">
        <img
          src={profile}
          alt=""
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <p>{profileName}</p>
        <p className="p-1 border ml-3 border-white rounded-lg">Follow</p>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default VideoInfo;

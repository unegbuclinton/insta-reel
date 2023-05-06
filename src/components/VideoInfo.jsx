import React from "react";
import profile from "../assets/images/img1.jpg";
const VideoInfo = ({ profileName, caption, profileImage }) => {
  return (
    <div className="absolute bottom-10 left-2 font-light text-white text-[9px] max-w-[205px]">
      <div className="flex gap-1 items-center mb-1">
        <img
          src={profileImage}
          alt=""
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <p>{profileName}</p>
        <p className="p-1 border ml-3 border-white rounded-lg">Follow</p>
      </div>
      <p className="w-[250px] h-10 overflow-hidden whitespace-nowrap text-ellipsis">
        {caption}
      </p>
    </div>
  );
};

export default VideoInfo;

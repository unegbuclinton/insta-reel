import React from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import reels from "../assets/images/reels.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";

const DashboardFooter = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="flex h-[55px] justify-evenly items-center gap-8 fixed bottom-0 bg-black  w-full z-20">
      <GrHomeRounded fill="#fff" size={24} />
      <FiSearch color="#fff" size={24} />
      <img src={reels} alt="" className="w-[7%]" />

      <AiOutlineHeart color="#fff" size={24} />

      <HiOutlineUserCircle color="#fff" size={24} />
    </div>
  );
};

export default DashboardFooter;

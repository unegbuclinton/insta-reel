import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import reels from "../assets/images/instagram-reel.png";
import { HiOutlineCamera } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";

const Notification = () => {
  const { userData } = useSelector((state) => state.dashboard);
  const { email, balance } = userData;
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="fixed h-[54px] top-0 z-20 w-full flex bg-transparent justify-between gap-[75px] text-white items-center pr-5 py-3 mx-2">
      <div className="flex items-center gap-5">
        <BsArrowLeft />
        <span className="font-semibold">Reels</span>
      </div>
      <HiOutlineCamera color="#fff" size={25} />
    </div>
  );
};

export default Notification;

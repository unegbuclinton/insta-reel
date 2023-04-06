import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import reels from "../assets/images/instagram-reel.png";
import { MdPermMedia } from "react-icons/md";

const Notification = () => {
  const { userData } = useSelector((state) => state.dashboard);
  const { email, balance } = userData;
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="fixed top-0 z-10 w-full flex bg-black justify-start gap-[75px] text-white items-center pl-5 py-3 mb-2">
      <MdPermMedia color="#fff" size={20} />
      <h2 className="font-lilly text-2xl">Instagram</h2>
    </div>
  );
};

export default Notification;

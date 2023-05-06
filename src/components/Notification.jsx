import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import reels from "../assets/images/instagram-reel.png";
import { HiOutlineCamera } from "react-icons/hi";

const Notification = () => {
  const { userData } = useSelector((state) => state.dashboard);
  const { email, balance } = userData;
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="fixed h-[54px] top-0 z-20 w-full flex bg-transparent justify-end gap-[75px] text-white items-center pr-5 py-3 mb-2">
      <HiOutlineCamera color="#fff" size={25} />
      {/* <h2 className="font-lilly text-2xl">Instagram</h2> */}
    </div>
  );
};

export default Notification;

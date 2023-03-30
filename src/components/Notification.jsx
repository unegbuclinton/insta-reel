import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import reels from "../assets/images/instagram-reel.png";

const Notification = () => {
  const { userData } = useSelector((state) => state.dashboard);
  const { email, balance } = userData;
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="fixed top-0 z-10 w-full flex bg-white justify-start items-center pl-5 py-2 mb-2">
      <img src={reels} alt="" className="w-[10%] mr-7" />
      <div>
        <p className="font-bold text-sm px-4 py-2 rounded-md text-dark-pink border border-dark-pink mr-10 bg-transparent md:text-2xl">
          R$ {balance}
        </p>
      </div>
      <p
        onClick={checkout}
        className=" text-white bg-dark-pink px-4 py-2 text-sm font-semibold rounded"
      >
        SACAR
      </p>
    </div>
  );
};

export default Notification;

import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";
import profile from "../assets/images/img1.jpg";
import { BsSearch } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";

const DashboardFooter = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="flex h-[64px] justify-evenly items-center gap-8 fixed bottom-0 bg-black  w-full z-20">
      <RiHome5Line color="#fff" size={22} />
      <BsSearch color="#fff" size={22} />
      <RiAddCircleLine color="#fff" size={40} />
      <MdVideoLibrary color="#fff" size={22} />
      <div className="relative rounded-full w-[30px] h-[30px]">
        <img
          src={profile}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
        <span className="w-[5px] h-[5px] bg-red-600 rounded-full absolute -bottom-19 left-[50%] translate-x-0 -translate-y-[50%]"></span>
      </div>
    </div>
  );
};

export default DashboardFooter;

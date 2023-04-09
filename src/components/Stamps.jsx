import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Stamps = ({ onClick, likes }) => {
  return (
    <div className=" flex flex-col justify-center items-center absolute bottom-28 right-3 z-10 text-sm text-white font-medium">
      <div className="flex flex-col items-center mb-3">
        <AiOutlineHeart size={25} onClick={onClick} />
        <p className="mt-1">{likes}</p>
      </div>
      <div className="flex flex-col items-center mb-3">
        <FaRegComment size={25} />
        <p className="mt-1">10.5M</p>
      </div>
      <div className="flex flex-col items-center mb-3">
        <FiSend size={25} />
      </div>
    </div>
  );
};

export default Stamps;

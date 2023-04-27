import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Stamps = ({ onClick, likes, onLike }) => {
  return (
    <div className=" flex flex-col justify-center items-center absolute bottom-28 right-3 z-10 text-sm text-white font-medium">
      <div className="flex flex-col items-center mb-3">
        {!onLike && <AiOutlineHeart size={25} onClick={onClick} />}
        {onLike && <AiFillHeart size={25} color="#e81405" onClick={onClick} />}
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

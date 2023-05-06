import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, likeAPost } from "../redux/DashboardSlice";

const Stamps = ({ likes, id }) => {
  const { userData } = useSelector((state) => state.dashboard);
  const { limit, nextTime } = userData;
  const dispatch = useDispatch();
  const [forLike, setForLike] = useState(false);
  const formatDate = dayjs(nextTime).format("ddd DD/MM hh:mm");
  const getLike = (id) => {
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      dispatch(getUserData());
      if (!limit) return;
      toast.error(
        `You have reached your 100 likes daily limit! Come back at ${formatDate}`
      );
    });
  };
  return (
    <div className=" flex flex-col justify-center items-center absolute bottom-[4rem] right-3 z-10 text-sm text-white font-medium">
      <div className="flex flex-col items-center mb-3">
        {!forLike && <AiOutlineHeart size={25} onClick={() => getLike(id)} />}
        {forLike && (
          <AiFillHeart size={25} color="#e81405" onClick={() => getLike(id)} />
        )}
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

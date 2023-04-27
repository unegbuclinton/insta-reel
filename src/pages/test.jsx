import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Test = () => {
  return (
    <div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>Hello</SwiperSlide>
        <SwiperSlide>Hey</SwiperSlide>
        <SwiperSlide>HI</SwiperSlide>
        <SwiperSlide>He</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;

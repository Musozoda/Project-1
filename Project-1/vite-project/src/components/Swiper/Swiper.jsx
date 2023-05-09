import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Swiper1(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-[50px]"
      >
          <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" flex items-center justify-center">
            <img className="w-[100%] h-[100%]" src={props.img1} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >
            <img className="w-[100%] h-[100%] pt-[40px]" src={props.img2} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="w-[100%] h-[100%]" src={props.img3} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="w-[100%] h-[100%]" src={props.img4} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="w-[100%] h-[100%] pt-[40px]" src={props.img5} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="w-[100%] h-[100%]" src={props.img6} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="w-[100%] h-[100%]" src={props.img7} alt="" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="w-[100%] h-[100%] pt-[40px]" src={props.img8} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

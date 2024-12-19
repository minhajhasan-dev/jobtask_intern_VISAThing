import React from "react";
import { SiTrustpilot } from "react-icons/si";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carouselData from "./Carousel.json";
import "./styles.css";

const Carousel = ({ prevRef, nextRef }) => {
  return (
    <Swiper
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={5}
      spaceBetween={30}
    >
      {carouselData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full p-4  rounded-xl">
            {/* name position role */}
            <div className="flex justify-between items-center">
              <div className="text-start">
                <h1 className="text-xl text-[#111322] font-medium">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
              <div className="p-2 rounded-xl bg-[#A5ECBE]">
                <p className="text-xs">{item.role}</p>
              </div>
            </div>
            {/* rating time review */}
            <div>
              <div className="flex items-center mt-2 justify-between">
                <div className="flex gap-[3px]">
                  {[...Array(item.rating)].map((_, i) => (
                    <SiTrustpilot key={i} className="text-[#2B9851]" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
              {/* review */}
              <p className="text-sm text-gray-900 mt-2 text-start">
                {item.review}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

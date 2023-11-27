import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Banner1 from "../assets/Images/1920X50020235018746.png";
import Banner2 from "../assets/Images/AmarisxSunny20223007011.jpg";
import Banner3 from "../assets/Images/AMGVODKADEKSTOP20232054283.jpg";
import Banner4 from "../assets/Images/dekstop220231144382.jpg";
import Banner5 from "../assets/Images/glenwalkbannerdesktop20232219882.jpg";
import Banner6 from "../assets/Images/mansionzbanner20223102076.jpg";
import Banner7 from "../assets/Images/MORNING20234701075.jpg";
import Banner8 from "../assets/Images/RSVBannerforWebsite(1)20233530679.png";
import Banner9 from "../assets/Images/socidekstopbanner220230233241.jpg";

export default function Banner() {
  return (
    <>
      <Swiper
        className="mySwiper"
        style={{
          height: "400px",
          cursor: "pointer",
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={Banner1} alt="Banner1" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner2" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner3" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt="Banner4" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner5} alt="Banner5" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner6} alt="Banner6" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner7} alt="Banner7" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner8} alt="Banner8" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner9} alt="Banner9" width="100%" height="100%" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

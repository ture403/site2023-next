import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import styles from "./youtube.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const YoutubeImg = ({ youtube }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        width={500}
        height={500}
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
    </a>
  );
};

const YoutubeSlider = ({ youtubes }) => {
  return (
    <div className={`${styles.youtube__slider}`}>
      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={5}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          width: "500px",
          height: "500px",
        }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeImg youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YoutubeSlider;

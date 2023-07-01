import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import styles from "./unplash.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const UnsplashImg = ({ img }) => {
  return (
    <a
      href={`https://unsplash.com/search/photos/${img.id}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image width={500} height={500} src={img.urls.small} alt="test" />
    </a>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <div className={`${styles.unsplash__slider}`}>
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
        }}
        speed={700}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={`${styles.img}`}>
            <UnsplashImg img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;

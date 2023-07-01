import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./movie.module.scss";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const MovieImg = ({ movie }) => {
  return (
    <a href={`https://api.themoviedb.org/movie/${movie.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="test"
        width={500}
        height={500}
      />
    </a>
  );
};

const MovieSlider = ({ images }) => {
  return (
    <div className="movie__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"5"}
        initialSlide="3"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieImg movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;

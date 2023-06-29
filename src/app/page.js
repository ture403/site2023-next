import React from "react";
import Portfolio from "@/components/portfolio/Portfolio";
import Slider from "@/components/slider/Slider";
import Intro from "@/components/intro/Intro";
import Youtube from "@/components/youtube/Youtube";
import Movie from "@/components/movie/Movie";
import Unsplash from "@/components/unplash/Unsplash";

const Home = () => {
  return (
    <>
      <Slider />
      <Intro />
      <Portfolio />
      <Youtube />
      <Unsplash />
      <Movie />
    </>
  );
};

export default Home;

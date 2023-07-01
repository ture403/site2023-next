"use client";
import ContTitle from "@/components/titile/ContTitle";
import YoutubeCont from "@/components/youtube/YoutubeCont";
import YoutubeSlider from "@/components/youtube/YoutubeSlider";
import YoutubeSearch from "@/components/youtube/YoutubeSearch";
import YoutubeTag from "@/components/youtube/YoutubeTag";

import { useEffect, useState } from "react";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyBYGD5tKWbM__Pz15UzP1uWIOwde8gTV_M`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=조코딩&type=video&key=AIzaSyBYGD5tKWbM__Pz15UzP1uWIOwde8gTV_M"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ContTitle title="youtube" />
      <YoutubeSlider youtubes={youtubes} />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag Tag={search} />
      <YoutubeCont youtubes={youtubes} />
    </>
  );
};

export default Youtube;

"use client";
import ContTitle from "@/components/titile/ContTitle";
import UnsplashCont from "@/components/unplash/UnsplashCont";
import UnsplashSlider from "@/components/unplash/UnsplashSlider";
import UnsplashTag from "@/components/unplash/UnsplashTag";
import UnsplashSearch from "@/components/unplash/UnsplashSearch";
import React, { useEffect, useState } from "react";

const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `https://api.unsplash.com/search/photos?client_id=3fLduMDzaR7Vq59dINrEif7nOY0l0PjeyPwMkrn3Roc&per_page=30&order_by=popular&query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/search/photos?client_id=3fLduMDzaR7Vq59dINrEif7nOY0l0PjeyPwMkrn3Roc&per_page=30&order_by=popular&query=seoul",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <ContTitle title="unsplash" />
      <UnsplashSlider images={images} />
      <UnsplashSearch onSearch={search} />
      <UnsplashTag Tag={search} />
      <UnsplashCont images={images} />
    </>
  );
};

export default UnsplashPage;

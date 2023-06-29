"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import MovieCont from "@/components/movie/MovieCont";
import ContTitle from "@/components/titile/ContTitle";

const MoviePage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(`${query}?api_key=76bdc971ba84bff496ab1d4f27cc9c5c`)
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=76bdc971ba84bff496ab1d4f27cc9c5c"
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <ContTitle title="movie" />
      <MovieCont images={images} />
    </>
  );
};

export default MoviePage;

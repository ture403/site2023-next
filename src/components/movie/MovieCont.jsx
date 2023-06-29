import React from "react";
import MovieItem from "./MovieItem";
import styles from "./movie.module.scss";

const MovieCont = ({ images }) => {
  return (
    <div className={`${styles.movie__cont} container`}>
      <ul>
        {images.map((image, index) => (
          <MovieItem key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;

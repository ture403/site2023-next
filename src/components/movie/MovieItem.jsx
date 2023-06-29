import React from "react";
import Image from "next/image";
import styles from "./movie.module.scss";

const MovieItem = ({ index, image }) => {
  return (
    <li key={index}>
      <a href={`https://www.themoviedb.org/movie/${image.id}`} target="_blank">
        <Image
          width={500}
          height={500}
          src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
          alt={image.original_title}
        />
        <em>
          <p className={styles.title}>{image.title}</p>
          <span className={styles.star}>{image.vote_average}</span>
        </em>
      </a>
    </li>
  );
};
export default MovieItem;

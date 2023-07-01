import React, { useState } from "react";
import styles from "./movie.module.scss";
const movieTagList = [
  {
    name: "인기 영화",
    url: "https://api.themoviedb.org/3/movie/popular",
  },
  {
    name: "현재 상영작",
    url: "https://api.themoviedb.org/3/movie/now_playing",
  },
  {
    name: "최신 영화",
    url: "https://api.themoviedb.org/3/movie/upcoming",
  },
  {
    name: "인기 티비쇼",
    url: "https://api.themoviedb.org/3/tv/popular",
  },
  {
    name: "티비쇼 순위",
    url: "https://api.themoviedb.org/3/tv/top_rated",
  },
];

const MovieTag = ({ Tag }) => {
  const [activeTag, setActiveTag] = useState("인기 영화");

  function btnClick(e) {
    const clickedTag = movieTagList.find(
      (tag) => tag.name === e.target.innerText
    );
    if (clickedTag) {
      setActiveTag(clickedTag.name);
      Tag(clickedTag.url);
    }
  }

  return (
    <div className={`${styles.movie__tag} container`}>
      <ul>
        {movieTagList.map((tag, index) => (
          <li
            onClick={btnClick}
            key={index}
            className={tag.name === activeTag ? "active" : ""}
          >
            <button>{tag.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTag;

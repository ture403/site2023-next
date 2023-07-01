import React from "react";
import styles from "./unplash.module.scss";

const Tags = [
  { name: "apple" },
  { name: "tomato" },
  { name: "watermemlon" },
  { name: "berry" },
  { name: "lemon" },
];

const UnsplashTag = ({ Tag }) => {
  function btnClick(tagName) {
    Tag(tagName);
  }

  return (
    <div className={`${styles.unsplash__tag} container`}>
      <ul>
        {Tags.map((tag, index) => (
          <button onClick={() => btnClick(tag.name)} key={index}>
            {tag.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default UnsplashTag;

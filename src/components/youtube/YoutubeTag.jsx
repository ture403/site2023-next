import React from "react";
import styles from "./youtube.module.scss";

const Tags = [
  { name: "코딩 애플" },
  { name: "조코딩" },
  { name: "노마드코딩" },
  { name: "코딩알려주는누나" },
  { name: "드림코딩" },
];

const YoutubeTag = ({ Tag }) => {
  function btnClick(tagName) {
    Tag(tagName);
  }

  return (
    <div className={`${styles.youtube__tag} container`}>
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

export default YoutubeTag;

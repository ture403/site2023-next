import Image from "next/image";
import React from "react";
import styles from "./unplash.module.scss";

const UnsplashImg = ({ image, index }) => {
  return (
    <li key={index}>
      <a href={`https://unsplash.com/search/photos/${image.id}`}>
        <Image
          width={500}
          height={500}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className={`${styles.Unsplash__cont} container`}>
      <ul>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;

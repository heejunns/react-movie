import React, { useRef, useState } from "react";
import Movie from "./Movie";
import styled from "./Slide.module.css";

const Slide = ({ movies }) => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const slideMode = useRef(true);
  const onclickLeft = () => {
    setCurrentLocation((prev) => prev + 10);
  };
  const onclickRight = () => {
    setCurrentLocation((prev) => prev - 10);
  };
  return (
    <div className={styled.container}>
      <div
        className={styled.layout}
        style={{
          transform: `translate(${currentLocation}vw)`,
        }}
      >
        {movies.map((movieElement, index) => {
          return (
            <Movie
              id={movieElement.id}
              slideMode={slideMode.current}
              key={index}
              mediumCoverImage={movieElement.medium_cover_image}
              titleLong={movieElement.title_long}
              rating={movieElement.rating}
            />
          );
        })}
      </div>
      <button className={styled.left} onClick={onclickLeft}>
        0
      </button>
      <button className={styled.right} onClick={onclickRight}>
        1
      </button>
    </div>
  );
};

export default Slide;

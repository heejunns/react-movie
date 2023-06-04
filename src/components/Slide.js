import React, { useRef, useState } from "react";
import Movie from "./Movie";
import styled from "./Slide.module.css";

const Slide = ({ movies }) => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [currentClick, setCurrentClick] = useState(1);
  const slideMode = useRef(true);
  const onclickLeft = () => {
    setCurrentLocation((prev) => prev + 100);
  };
  const onclickRight = () => {
    setCurrentLocation((prev) => prev - 100);
  };

  const onclickSmartButtonWon = (e) => {
    setCurrentClick(1);
    setCurrentLocation(0);
  };
  const onclickSmartButtonTwo = () => {
    setCurrentClick(2);
    setCurrentLocation(-1000);
  };
  const onclickSmartButtonThree = () => {
    setCurrentClick(3);
    setCurrentLocation(-2000);
  };
  const onclickSmartButtonFour = () => {
    setCurrentClick(4);
    setCurrentLocation(-3000);
  };
  const onclickSmartButtonFive = () => {
    setCurrentClick(5);
    setCurrentLocation(-4000);
  };
  return (
    <div className={styled.back}>
      <div className={styled.container}>
        <div
          className={styled.layout}
          style={{
            transform: `translate(${currentLocation}px)`,
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
              />
            );
          })}
        </div>
        <div></div>
      </div>
      <button className={styled.left} onClick={onclickLeft}>
        &lt;
      </button>

      <button className={styled.right} onClick={onclickRight}>
        &gt;
      </button>
      <div className={styled.slide_smart_button}>
        <div
          onClick={onclickSmartButtonWon}
          style={currentClick === 1 ? { backgroundColor: "tomato" } : null}
        ></div>
        <div
          onClick={onclickSmartButtonTwo}
          style={currentClick === 2 ? { backgroundColor: "tomato" } : null}
        ></div>
        <div
          onClick={onclickSmartButtonThree}
          style={currentClick === 3 ? { backgroundColor: "tomato" } : null}
        ></div>
        <div
          onClick={onclickSmartButtonFour}
          style={currentClick === 4 ? { backgroundColor: "tomato" } : null}
        ></div>
        <div
          onClick={onclickSmartButtonFive}
          style={currentClick === 5 ? { backgroundColor: "tomato" } : null}
        ></div>
      </div>
    </div>
  );
};

export default Slide;

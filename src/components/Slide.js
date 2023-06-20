import React, { useRef, useState } from "react";
import Movie from "./Movie";
import styled from "./Slide.module.css";

const Slide = ({ movies }) => {
  const [currentLocation, setCurrentLocation] = useState(0); // 최근 위치
  const [currentClick, setCurrentClick] = useState(1); // 클릭위치에 따라서 현재 클릭한 버튼의 색을 주황색으로 변경하기 위한 state
  const slideMode = useRef(true); // 홈 화면에서 슬라이드에 Movie 컴포넌트를 불러오는지 알기 위해서

  const onclickSmartButtonWon = () => {
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
                mediumCoverImage={`https://image.tmdb.org/t/p/w200${movieElement.poster_path}`}
                titleLong={movieElement.title}
              />
            );
          })}
        </div>
      </div>
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

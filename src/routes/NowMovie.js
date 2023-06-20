import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Movie from "../components/Movie";
import styled from "./NowMovie.module.css";
const options = {
  params: { language: "ko", page: "1", region: "kr" },
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_AUTH,
  },
};
const NowMovie = () => {
  const [nowMovies, setNowMovies] = useState(null);
  const nowMoviesGet = async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        options
      );
      setNowMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    nowMoviesGet();
  }, []);
  return (
    <div className={styled.background}>
      <header>
        <Nav />
      </header>
      <div className={styled.layout}>
        {nowMovies === null ? (
          <div className={styled.movieLoading}>영화 불러오는 중...</div>
        ) : (
          nowMovies.map((movie, index) => {
            return (
              <Movie
                slideMode={false}
                id={movie.id}
                titleLong={movie.title}
                mediumCoverImage={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                summary={
                  movie.overview.length > 250
                    ? movie.overview.slice(0, 251) + "..."
                    : movie.overview
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default NowMovie;

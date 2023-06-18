import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Movie from "../components/Movie";
import styled from "./Upcoming.module.css";
const options = {
  params: { language: "ko", page: "1", region: "kr" },
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_AUTH,
  },
};
const Upcoming = () => {
  const [upComingMovies, setUpcomingMovies] = useState(null);
  const upComingMoviesGet = async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        options
      );
      console.log(response);

      setUpcomingMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    upComingMoviesGet();
  }, []);
  return (
    <div className={styled.background}>
      <header>
        <Nav />
      </header>
      <div className={styled.layout}>
        {upComingMovies === null ? (
          <div className={styled.movieLoading}>영화가 없습니다.</div>
        ) : (
          upComingMovies.map((movie, index) => {
            console.log(movie);
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

export default Upcoming;

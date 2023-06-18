import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "./MovieList.module.css";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
import axios from "axios";

const MovieList = () => {
  const { id } = useParams();
  const genreId = useRef(null);
  if (id === "action") {
    genreId.current = 28;
  } else if (id === "adventure") {
    genreId.current = 12;
  } else if (id === "animation") {
    genreId.current = 16;
  } else if (id === "comedy") {
    genreId.current = 35;
  } else if (id === "drama") {
    genreId.current = 18;
  }

  const options = {
    params: {
      include_adult: "true",
      include_video: "false",
      language: "ko",
      page: "1",
      region: "kr",
      sort_by: "popularity.desc",
      with_genres: genreId.current,
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  };

  const [MoviesList, setMoviesList] = useState([]);
  const getMoviesList = async () => {
    try {
      const responseGenreMovieList = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        options
      );
      setMoviesList(responseGenreMovieList.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMoviesList();
  }, [id]);
  return (
    <div className={styled.background}>
      <header>
        <Nav />
      </header>
      <div className={styled.layout}>
        {MovieList === null ? (
          <div>영화 불러오는 중</div>
        ) : (
          MoviesList.map((movie) => {
            return (
              <div>
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
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MovieList;

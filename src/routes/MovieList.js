import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "./MovieList.module.css";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
const MovieList = () => {
  const { id } = useParams();
  const [MoviesList, setMoviesList] = useState([]);
  const getMoviesList = async () => {
    const responseMoviesList = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&limit=20&genre=${id}`
    );

    const responseMoviesListJson = await responseMoviesList.json();
    console.log(responseMoviesListJson);
    setMoviesList(responseMoviesListJson.data.movies);
  };
  useEffect(() => {
    getMoviesList();
  }, [MoviesList]);
  return (
    <div className={styled.background}>
      <header>
        <Nav />
      </header>
      <div className={styled.layout}>
        {MoviesList.map((movie) => {
          return (
            <div>
              <Movie
                slideMode={false}
                id={movie.id}
                titleLong={movie.title_long}
                mediumCoverImage={movie.medium_cover_image}
                summary={
                  movie.summary.length > 250
                    ? movie.summary.slice(0, 251) + "..."
                    : movie.summary
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;

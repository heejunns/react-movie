import { useState, useEffect, useRef } from "react";
import styled from "./Home.module.css";
import Nav from "../components/Nav";
import Slide from "../components/Slide";
import { json } from "react-router-dom";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=download_count&limit=20&page=1`
    );

    const json = await response.json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };
  const getMoviesAnimation = async () => {
    const responseAnimation = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&limit=20&genre=animation"
    );
    const responseAnimationJson = await responseAnimation.json();
    console.log(responseAnimationJson);
    setAnimationMovies(responseAnimationJson.data.movies);
  };
  const getMoviesAction = async () => {
    const responseAction = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&limit=20&genre=action"
    );
    const responseActionJson = await responseAction.json();

    setActionMovies(responseActionJson.data.movies);
  };
  const getMoviesAdventure = async () => {
    const responseAdventure = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&limit=20&genre=adventure"
    );
    const responseAdventureJson = await responseAdventure.json();

    setAdventureMovies(responseAdventureJson.data.movies);
  };
  const getMoviesRomance = async () => {
    const responseRomance = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&limit=20&genre=romance"
    );
    const responseRomanceJson = await responseRomance.json();

    setRomanceMovies(responseRomanceJson.data.movies);
  };

  useEffect(() => {
    getMovies();
    getMoviesAnimation();
    getMoviesAction();
    getMoviesAdventure();
    getMoviesRomance();
  }, []);

  return (
    <div className={styled.back}>
      {loading ? (
        <div className={styled.loading}>
          <div className={styled.loadingText}>Loading</div>
          <div className={styled.loadingIcon1}></div>
          <div className={styled.loadingIcon2}></div>
          <div className={styled.loadingIcon3}></div>
          <div className={styled.loadingIcon4}></div>
          <div className={styled.loadingIcon5}></div>
          <div className={styled.loadingIcon6}></div>
        </div>
      ) : (
        <>
          <header>
            {" "}
            <Nav className={styled.nav} />
          </header>
          <main className={styled.main}>
            <Slide movies={movies} />
            <Slide movies={animationMovies} />
            <Slide movies={actionMovies} />
            <Slide movies={adventureMovies} />
            <Slide movies={romanceMovies} />
          </main>
        </>
      )}
    </div>
  );
}

export default Home;

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
        <h3>loading... </h3>
      ) : (
        <div>
          <header>
            {" "}
            <Nav className={styled.nav} />
          </header>
          <main>
            <div>
              {" "}
              <Slide movies={movies} />
            </div>
            <div>
              {" "}
              <Slide movies={animationMovies} />
            </div>
            <div>
              {" "}
              <Slide movies={actionMovies} />
            </div>
            <div>
              {" "}
              <Slide movies={adventureMovies} />
            </div>
            <div>
              {" "}
              <Slide movies={romanceMovies} />
            </div>
          </main>
          <footer>hello world!</footer>
        </div>
      )}
    </div>
  );
}

export default Home;

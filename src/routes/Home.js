import { useState, useEffect } from "react";
import styled from "./Home.module.css";
import Nav from "../components/Nav";
import Slide from "../components/Slide";
import axios from "axios";
const options = [
  {
    params: {
      include_adult: "true",
      include_video: "false",
      language: "ko",
      page: "1",
      region: "kr",
      sort_by: "popularity.desc",
      with_genres: "28",
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  },
  {
    params: {
      include_adult: "true",
      include_video: "false",
      language: "ko",
      page: "1",
      region: "kr",
      sort_by: "popularity.desc",
      with_genres: "12",
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  },
  {
    params: {
      include_adult: "true",
      include_video: "false",
      language: "ko",
      page: "1",
      region: "kr",
      sort_by: "popularity.desc",
      with_genres: "16",
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  },
  {
    params: {
      include_adult: "true",
      include_video: "false",
      language: "ko",
      page: "1",
      region: "kr",
      sort_by: "popularity.desc",
      with_genres: "35",
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  },
  {
    params: {
      include_adult: "true",
      include_video: "false",
      language: "ko",
      page: "1",
      region: "kr",
      sort_by: "popularity.desc",
      with_genres: "18",
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  },
];
function Home() {
  const [loading, setLoading] = useState(true);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const getMovies = async () => {
    const responses = await axios.all(
      options.map((option) =>
        axios.get("https://api.themoviedb.org/3/discover/movie", option)
      )
    );
    setActionMovies(responses[0].data.results);
    setAdventureMovies(responses[1].data.results);
    setAnimationMovies(responses[2].data.results);
    setComedyMovies(responses[3].data.results);
    setDramaMovies(responses[4].data.results);

    setLoading(false);
  };

  useEffect(() => {
    getMovies();
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
            <div className={styled.slideName}>Comedy TOP20</div>
            <Slide movies={comedyMovies} />
            <div className={styled.slideName}>Animation TOP20</div>
            <Slide movies={animationMovies} />
            <div className={styled.slideName}>Action TOP20</div>
            <Slide movies={actionMovies} />
            <div className={styled.slideName}>Adventure TOP20</div>
            <Slide movies={adventureMovies} />
            <div className={styled.slideName}>Drama TOP20</div>
            <Slide movies={dramaMovies} />
          </main>
        </>
      )}
    </div>
  );
}

export default Home;

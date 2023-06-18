import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";
import styled from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState([]);
  const { id } = useParams(); // 현재 페이지의 url 의 id 를 가져올 수 있음, id 가 담긴 객체 형태로 반환
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/798286",
    params: { language: "ko" },
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_AUTH,
    },
  };

  const getsMovie = async () => {
    try {
      const getMovieDetail = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      console.log("데이터", getMovieDetail);

      setDetailMovie(getMovieDetail.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getsMovie();
  }, [id]);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path} `,
        margin: "0",
      }}
    >
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
        <div>
          <header>
            <Nav />
          </header>
          <div className={styled.layout}>
            <img
              alt="사진"
              src={`https://image.tmdb.org/t/p/w200${detailMovie.poster_path}`}
              className={styled.detailImg}
            />
            <div className={styled.detailExplain}>
              <h1 className={styled.detail_title}>{detailMovie.title}</h1>
              <div className={styled.detail_rating}>
                {" "}
                개봉일 : {detailMovie.release_date}
              </div>
              <div className={styled.detail_runtime}>
                {" "}
                런타임 : {detailMovie.runtime} 분
              </div>
              <div className={styled.detailDescription}>
                {detailMovie.overview}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

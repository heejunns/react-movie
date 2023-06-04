import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";
import styled from "./Detail.module.css";
import Movie from "../components/Movie";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState([]);
  const { id } = useParams(); // 현재 페이지의 url 의 id 를 가져올 수 있음, id 가 담긴 객체 형태로 반환
  console.log(id);
  const getsMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log("hi", json);
    setDetailMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getsMovie();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${detailMovie.background_image})` }}>
      {loading ? (
        <h1>"Loading..."</h1>
      ) : (
        <div>
          <header>
            <Nav />
          </header>
          <div className={styled.layout}>
            <img
              src={detailMovie.large_cover_image}
              className={styled.detailImg}
            />
            <div className={styled.detailExplain}>
              <h1 className={styled.detail_title}>{detailMovie.title_long}</h1>
              <div className={styled.detail_rating}>
                {" "}
                Rating : {detailMovie.rating}
              </div>
              <div className={styled.detail_runtime}>
                {" "}
                Runtime: {detailMovie.runtime} minute
              </div>
              <div className={styled.detailDescription}>
                {detailMovie.description_full}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

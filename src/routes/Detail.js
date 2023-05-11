import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState([]);
  const { id } = useParams(); // 현재 페이지의 url 의 id 를 가져올 수 있음, id 가 담긴 객체 형태로 반환
  console.log(id);
  const getsMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetailMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getsMovie();
  }, []);

  return (
    <div>
      <h1>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            <img src={detailMovie.medium_cover_image} />
            <h1>{detailMovie.title}</h1>
            <div>Rating : {detailMovie.rating}</div>
            <div>Runtime : {detailMovie.runtime}</div>
            <div>{detailMovie.description_full}</div>
          </div>
        )}
      </h1>
    </div>
  );
}

export default Detail;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./Movie.module.css";
function Movie({
  mediumCoverImage,
  titleLong,
  rating,
  id,
  slideMode,
  summary,
}) {
  return (
    <>
      {slideMode ? (
        <div className={styled.slidebord}>
          <img src={mediumCoverImage} alt={titleLong} />
          <h2>
            <Link to={`/movie/${id}`} className={styled.link}>
              {titleLong} * {rating}
            </Link>
          </h2>
        </div>
      ) : (
        <div className={styled.movieListBord}>
          <img src={mediumCoverImage} alt={titleLong} />
          <h1></h1>
          <h2>
            <Link to={`/movie/${id}`} className={styled.link}>
              {titleLong} * {rating}
            </Link>
          </h2>
          <p>{summary}</p>
        </div>
      )}
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string,
};

export default Movie;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./Movie.module.css";
function Movie({ mediumCoverImage, titleLong, id, slideMode, summary }) {
  return (
    <>
      {slideMode ? (
        <div className={styled.slidebord}>
          <img
            className={styled.imgHome}
            src={mediumCoverImage}
            alt={titleLong}
          />
          <h2 className={styled.home_title_name}>
            <Link to={`/movie/${id}`} className={styled.link}>
              {titleLong}
            </Link>
          </h2>
        </div>
      ) : (
        <div className={styled.movieListBord}>
          <img
            src={mediumCoverImage}
            alt={titleLong}
            className={styled.imgMovieList}
          />
          <h2>
            <Link to={`/movie/${id}`} className={styled.link}>
              {titleLong}
            </Link>
          </h2>
          <div className={styled.summary}>{summary}</div>
        </div>
      )}
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string,
  slideMode: PropTypes.bool,
};

export default Movie;

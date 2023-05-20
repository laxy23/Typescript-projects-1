import { TrendingMoviesProps } from "./utils/MovieTypes";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function MoviesList({ movieList }: TrendingMoviesProps) {
  return (
    <Col md={3} key={movieList?.id}>
      <div className="movie-item-2">
        <Link to="/">
          <img
            src={
              movieList?.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movieList?.poster_path}`
                : ""
            }
            alt={movieList?.title}
          />
          <div className="text-box-container">
            <div className="text-box">
              <h3>
                {movieList?.title ? movieList.title : movieList?.name} (
                <span>
                  {movieList?.release_date
                    ? movieList.release_date.split("-")[0]
                    : movieList?.first_air_date?.split("-")[0]}
                </span>
                )
              </h3>
              <div className="rating">
                <h4>
                  {movieList?.vote_average}{" "}
                  <span>
                    <AiFillStar />
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
}

export default MoviesList;

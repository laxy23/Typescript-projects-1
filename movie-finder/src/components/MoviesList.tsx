import { TrendingMoviesProps } from "./utils/MovieTypes";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function MoviesList({ movieList }: TrendingMoviesProps) {
  return (
    <Col
      sm={6}
      md={4}
      lg={3}
      xs={8}
      key={movieList?.id}
      id={`${movieList?.id}`}
    >
      <div className="movie-item-2">
        <Link
          to={
            movieList?.first_air_date
              ? `/tv/${movieList?.id}/details`
              : `/movie/${movieList?.id}/details`
          }
        >
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
                  {movieList && movieList.vote_average
                    ? Math.floor(movieList?.vote_average)
                    : ""}
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

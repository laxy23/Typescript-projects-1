import PageTitle from "./PageTitle";
import { settings2 } from "./utils/CarouselSettings";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TrendingMoviesProps } from "./utils/MovieTypes";

function RecommendedMovies({ recommendedMovies }: TrendingMoviesProps) {
  return (
    <Col md={12} className="item-2 section-margin">
      <PageTitle title="Recommended" />
      <Slider {...settings2}>
        {recommendedMovies?.map((movie, i) => (
          <div key={i} className="movie-item">
            <Link to={`/movie/${movie.id}/details`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : ""
                }
                alt={movie.title}
              />
              <div className="text-box-container">
                <div className="text-box">
                  <h3>
                    {movie.title} (
                    <span>{movie.release_date.split("-")[0]}</span>)
                  </h3>
                  <div className="rating">
                    <h4>
                      {movie.vote_average}{" "}
                      <span>
                        <AiFillStar />
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </Col>
  );
}

export default RecommendedMovies;

import { settings } from "./utils/CarouselSettings";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TrendingMoviesProps } from "./utils/MovieTypes";

function TrendingMovies({ trendingMovies }: TrendingMoviesProps) {
  return (
    <Col md={12} className="first-slider item-1">
      <Slider {...settings}>
        {trendingMovies?.map((movie, i) => (
          <div key={i} className="movie-item">
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : ""
              }
              alt={movie.title}
            />
            <div className="text-box-container">
              <div className="text-box">
                <h3>{movie.title}</h3>
                <Link to="/" className="movie-info-btn">
                  Read More{" "}
                  <span>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                </Link>
              </div>
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
        ))}
      </Slider>
    </Col>
  );
}

export default TrendingMovies;

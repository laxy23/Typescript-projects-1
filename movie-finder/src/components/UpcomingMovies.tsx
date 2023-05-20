import PageTitle from "./PageTitle";
import { settings3 } from "./utils/CarouselSettings";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { TrendingMoviesProps } from "./utils/MovieTypes";

function UpcomingMovies({ upcomingMovies }: TrendingMoviesProps) {
  return (
    <Col md={12} className="item-2 item-3">
      <PageTitle title="Upcoming" />
      <Slider {...settings3}>
        {upcomingMovies?.map((movie, i) => (
          <div key={i} className="movie-item">
            <Link to="/">
              <img
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
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
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </Col>
  );
}

export default UpcomingMovies;

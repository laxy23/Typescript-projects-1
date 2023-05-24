import ModalVideo from "react-modal-video";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieDetailList } from "./utils/MovieTypes";

function MovieDetail({ movieDetail }: MovieDetailList) {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const checkIsOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (movieDetail.first_air_date) {
      const fetchTvVideo = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${movieDetail.id}/videos?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US`
        );
        const data = await res.json();

        setVideoId(data.results[0].key);
      };

      fetchTvVideo();
    } else {
      const fetchMovieVideo = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieDetail.id}/videos?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US`
        );
        const data = await res.json();
        setVideoId(data.results[0].key);
      };

      fetchMovieVideo();
    }
  }, []);

  return (
    <>
      <Col md={8} lg={6} className="item item-1">
        <h3>
          {movieDetail?.original_title
            ? movieDetail.original_title
            : movieDetail.original_name}
        </h3>
        <h4 className="year">
          (
          {movieDetail?.release_date
            ? movieDetail.release_date.split("-")[0]
            : movieDetail.first_air_date.split("-")[0]}
          )
        </h4>
        <p className="desc">{movieDetail?.overview}</p>
        <div className="lists">
          <div className="list">
            <h4>Geners : </h4>
            <ul>
              {movieDetail?.genres.map((genre, i) => (
                <li key={i}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h4>Rating: </h4>
            <p>
              {movieDetail?.vote_average
                ? Math.floor(movieDetail.vote_average)
                : ""}
            </p>
          </div>
          <div className="list">
            <h4>Status :</h4>
            <p>{movieDetail?.status}</p>
          </div>
        </div>
        <Link
          to={`${movieDetail.homepage}`}
          target="_blank"
          className="primary-btn"
        >
          See More
        </Link>
      </Col>
      <Col md={4} lg={6} className="item item-2">
        <button
          aria-label="Play Button"
          className="play-btn"
          onClick={checkIsOpen}
        ></button>
      </Col>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default MovieDetail;

import ModalVideo from "react-modal-video";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieDetailList } from "./utils/MovieTypes";

function MovieDetail({ movieDetail }: MovieDetailList) {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const checkIsOpen = () => {
    setOpen(true);
    setVideoId("O-b2VfmmbyA");
  };
  return (
    <>
      <Col md={6} className="item item-1">
        <h3>{movieDetail?.original_title}</h3>
        <h4 className="year">({movieDetail?.release_date.split("-")[0]})</h4>
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
      <Col md={6} className="item item-2">
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

import ModalVideo from "react-modal-video";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

function MovieInfo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      id="movie-info"
      style={{
        background: `url(https://image.tmdb.org/t/p/original/qkl57wzSFrpi2sRpoc2mZJbMuLP.jpg)`,
      }}
    >
      <Container>
        <Row>
          <Col md={6} className="item item-1">
            <h3>Minions: The Rise of Gru</h3>
            <h4 className="year">(2022)</h4>
            <p className="desc">
              A fanboy of a supervillain supergroup known as the Vicious 6, Gru
              hatches a plan to become evil enough to join them, with the backup
              of his followers, the Minions.
            </p>
            <div className="lists">
              <div className="list">
                <h4>Geners : </h4>
                <ul>
                  <li>Animation</li>
                  <li>Comedy</li>
                  <li>Family</li>
                </ul>
              </div>
              <div className="list">
                <h4>Rating: </h4>
                <p>{Math.floor(3.3)}</p>
              </div>
              <div className="list">
                <h4>Status :</h4>
                <p>Realeased</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="item item-2">
            <button aria-label="Play Button" className="play-btn"></button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MovieInfo;

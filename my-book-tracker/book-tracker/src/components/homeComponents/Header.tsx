import { Container, Col, Row } from "react-bootstrap";
import { BiArrowFromLeft } from "react-icons/bi";
import book from "../../images/cover-book.png";

function Header() {
  return (
    <section id="header" className="line-bottom">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <h1>To Succeed you must read</h1>
            <p>
              {" "}
              <span>Not sure what to read next?</span> Explore our catalog of
              public books.
            </p>

            <button className="secondary-btn">
              Explore Now{" "}
              <span>
                <BiArrowFromLeft />
              </span>
            </button>
          </Col>
          <Col md={6} className="item-2">
            <img src={book} alt="book cover" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;

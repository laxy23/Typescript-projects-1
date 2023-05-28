import { Container, Row, Col } from "react-bootstrap";
import experience from "../../images/experienceBook.png";
import { BiArrowFromLeft } from "react-icons/bi";

function Expereince() {
  return (
    <section id="experience" className="section-margin">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <img src={experience} alt="" />
          </Col>
          <Col md={6} className="item-2">
            <h2>We Provide You The Experience</h2>
            <p>
              Immerse yourself in a remarkable journey with our exceptional
              services, tailored to deliver an unparalleled experience that
              surpasses all expectations.
            </p>
            <button className="secondary-btn">
              Create Account{" "}
              <span>
                <BiArrowFromLeft />
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Expereince;

import { Container, Row, Col } from "react-bootstrap";
import experience from "../../images/experienceBook.png";
import { BiArrowFromLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuthStatus from "../utils/useAuthStatus";

function Expereince() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h3>Loading...</h3>;
  }

  if (loggedIn) {
    console.log(123);
  } else {
    console.log(456);
  }

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
            {loggedIn ? (
              <Link to="/explore" className="secondary-btn">
                Explore More{" "}
                <span>
                  <BiArrowFromLeft />
                </span>
              </Link>
            ) : (
              <Link to="/sign-up" className="secondary-btn">
                Create Account{" "}
                <span>
                  <BiArrowFromLeft />
                </span>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Expereince;

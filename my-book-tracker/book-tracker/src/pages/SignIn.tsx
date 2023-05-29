import { Container, Col, Row } from "react-bootstrap";
import booking from "../images/booking.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section id="register" className="section-margin">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <h3>Welcome Back!</h3>
            <p className="subtitle">Log into your account!</p>
            <form>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div className="button-container">
                <input type="submit" className="form-btn" value="Submit" />
              </div>
            </form>

            <p className="link">
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </Col>
          <Col md={6} className="item-2">
            <img src={booking} alt="Shelf" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignIn;

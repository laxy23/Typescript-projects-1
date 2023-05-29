import { Container, Col, Row } from "react-bootstrap";
import bookshelf from "../images/save-book.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section id="register" className="section-margin">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <h3>Get Started!</h3>
            <p className="subtitle">Create your account now!</p>
            <form>
              <div className="input-container">
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
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
              Have an account? <Link to="/sign-in">Sign In</Link>
            </p>
          </Col>
          <Col md={6} className="item-2">
            <img src={bookshelf} alt="Shelf" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;

import { Container, Col, Row } from "react-bootstrap";
import bookshelf from "../images/save-book.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { register, reset } from "../state/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, password } = data;

  const { user, isSuccess, isError, isLoading } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log("Something went wrong!");
    }

    if (isSuccess || user) {
      console.log("User has been created!");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data) {
      try {
        dispatch<any>(register(data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <section id="register" className="section-margin">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <h3>Get Started!</h3>
            <p className="subtitle">Create your account now!</p>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter your password"
                />
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

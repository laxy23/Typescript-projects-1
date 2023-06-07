import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { reset } from "../state/authSlice";
import { useDispatch } from "react-redux";

function NavMenu() {
  const [value, setValue] = useState("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = localStorage.getItem("librifyUser");
  useEffect(() => {
    if (user) {
      const name = JSON.parse(user);
      const username = name.name;
      setId(name._id);
      setUserName(username);
    }
  }, [user]);

  const handleClick = () => {
    if (value === "" || value.trim() === "") {
      return;
    } else {
      navigate(`/search/${value}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("librifyUser");
    dispatch(reset());
    window.location.reload();
  };

  return (
    <Navbar expand="lg" id="nav" className="line-bottom">
      <Container>
        <Link className="navbar-brand" to="/">
          <h1>Librify</h1>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Row className="items">
            <Col md={7} className="item-1">
              <Nav
                className="link-items my-2 my-lg-0 nav-link-container"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
                <Link className="nav-link" to="/create-book">
                  Create Book
                </Link>
                <Link className="nav-link" to={`/my-books/${id}`}>
                  My Books
                </Link>
              </Nav>
            </Col>
            <Col md={5} className="item-2">
              <Nav>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Enter a title"
                    className="movie-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <span onClick={handleClick}>
                    <BiSearch />
                  </span>
                </div>
                <div className="button-container">
                  {userName === "" ? (
                    <Link to={"/sign-up"} className="primary-btn">
                      Create Account
                    </Link>
                  ) : (
                    <>
                      <button className="secondary-btn" onClick={handleLogOut}>
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;

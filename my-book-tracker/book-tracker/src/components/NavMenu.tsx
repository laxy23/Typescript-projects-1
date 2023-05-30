import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavMenu() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

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
  return (
    <Navbar expand="lg" id="nav" className="line-bottom">
      <Container>
        <Navbar.Brand href="/">
          <h1>Librify</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Row className="items">
            <Col md={7} className="item-1">
              <Nav
                className="link-items my-2 my-lg-0 nav-link-container"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/explore">Explore</Nav.Link>
                <Nav.Link href="/create-book">Create Book</Nav.Link>
                <Nav.Link href="/my-books">My Books</Nav.Link>
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
                  <Link to={"/sign-up"} className="primary-btn">
                    Create Account
                  </Link>
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

import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavMenu() {
  const [search, setSearch] = useState<string | number>("");
  const [whiteNav, setWhiteNav] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathMatchRoute = () => {
      const pattern = /^\/movie\/\d+\/details$/; // Regular expression pattern

      if (pattern.test(location.pathname)) {
        setWhiteNav(true);
      } else {
        setWhiteNav(false);
      }
    };
    pathMatchRoute();
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (search !== "") {
      navigate(`/movie/${search}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <Navbar
      expand="lg"
      id="nav"
      style={{
        color: `${whiteNav ? "white" : "black"}`,
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <h1>
            Movie <span>Finder</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Row>
            <Col md={8}>
              <Nav
                className="me-auto my-2 my-lg-0 nav-link-container"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/tv-shows">TV Show</Nav.Link>
              </Nav>
            </Col>
            <Col md={4} className="item-2">
              <Nav>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Enter a title"
                    className="movie-input"
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                  />
                  <span onClick={handleClick}>
                    <BiSearch />
                  </span>
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

import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavMenu() {
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
                  />
                  <span>
                    <BiSearch />
                  </span>
                </div>
                <div className="button-container">
                  <Link to={"/profile"} className="primary-btn">
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

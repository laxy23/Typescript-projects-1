import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Explore</Nav.Link>
                <Nav.Link href="/movies">Create Book</Nav.Link>
                <Nav.Link href="/tv-shows">My Books</Nav.Link>
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
                  <button className="primary-btn">Create Account</button>
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

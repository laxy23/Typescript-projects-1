import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

function NavMenu() {
  return (
    <Navbar expand="lg" id="nav">
      <Container>
        <Navbar.Brand href="#">
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
                <Nav.Link href="#action1">Movies</Nav.Link>
                <Nav.Link href="#action2">TV Show</Nav.Link>
              </Nav>
            </Col>
            <Col md={4} className="item-2">
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
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;

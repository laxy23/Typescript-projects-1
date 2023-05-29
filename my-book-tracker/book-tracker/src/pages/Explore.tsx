import { Container, Col, Row } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";
import Dropdown from "react-bootstrap/Dropdown";

function Explore() {
  return (
    <section id="explore">
      <Container className="item-container">
        <PageTitle title="Explore" />
        <Dropdown className="option">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Row></Row>
      </Container>
    </section>
  );
}

export default Explore;

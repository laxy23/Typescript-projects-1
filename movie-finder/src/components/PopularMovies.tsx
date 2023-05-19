import PageTitle from "../components/PageTitle";
import { Col } from "react-bootstrap";

function PopularMovies() {
  return (
    <Col md={12} className="item-2">
      <PageTitle title="Popular Movies" />
    </Col>
  );
}

export default PopularMovies;

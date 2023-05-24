import { useContext, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import MovieDetail from "../components/MovieDetail";

function TvInfo() {
  const params = useParams();
  const id = params.id;

  const { fetchTvDetails, tvDetail } = useContext(MovieContext);

  useEffect(() => {
    fetchTvDetails(id);
  }, [id]);
  return (
    <section
      id="movie-info"
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${tvDetail?.backdrop_path})`,
      }}
    >
      <Container>
        <Row>{tvDetail && <MovieDetail movieDetail={tvDetail} />}</Row>
      </Container>
    </section>
  );
}

export default TvInfo;

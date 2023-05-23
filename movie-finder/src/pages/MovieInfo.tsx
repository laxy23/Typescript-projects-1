import { useContext, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import MovieDetail from "../components/MovieDetail";

function MovieInfo() {
  const params = useParams();
  const id = params.id;

  const { fetchMovieDetails, movieDetail } = useContext(MovieContext);

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  return (
    <section
      id="movie-info"
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path})`,
      }}
    >
      <Container>
        <Row>{movieDetail && <MovieDetail movieDetail={movieDetail} />}</Row>
      </Container>
    </section>
  );
}

export default MovieInfo;

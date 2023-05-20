import PageTitle from "../components/PageTitle";
import { Row, Container } from "react-bootstrap";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MoviesList from "../components/MoviesList";

function Movies() {
  const { nowPlayingMovies } = useContext(MovieContext);
  return (
    <section id="movies" className="section-margin">
      <Container>
        <PageTitle title="Movies" />
        <Row>
          {nowPlayingMovies?.map((movie) => (
            <MoviesList movieList={movie} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Movies;

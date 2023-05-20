import PageTitle from "../components/PageTitle";
import { Row, Container } from "react-bootstrap";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MoviesList from "../components/MoviesList";

function TvShows() {
  const { tvshows } = useContext(MovieContext);
  return (
    <section id="movies" className="section-margin">
      <Container>
        <PageTitle title="Tv Shows" />
        <Row>
          {tvshows?.map((movie) => (
            <MoviesList movieList={movie} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TvShows;

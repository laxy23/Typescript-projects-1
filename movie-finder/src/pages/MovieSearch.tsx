import PageTitle from "../components/PageTitle";
import { Row, Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import { useParams } from "react-router-dom";
import MoviesList from "../components/MoviesList";

function MovieSearch() {
  const { searchByName, movieSearch, error } = useContext(MovieContext);
  const params = useParams();
  const name = params.name;

  useEffect(() => {
    if (name) {
      searchByName(name);
    }
  }, [name]);
  return (
    <section id="movies" className="section-margin">
      <Container>
        <PageTitle title="Results" />
        <Row>
          {error ? <h3 className="error">{error}</h3> : ""}
          {movieSearch?.map((movie) => (
            <MoviesList movieList={movie} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MovieSearch;

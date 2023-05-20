import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import TrendingMovies from "../components/TrendingMovies";
import RecommendedMovies from "../components/RecommendedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import { MovieContext } from "../context/MovieContext";

function Home() {
  const { trendingMovies, recommendedMovies, upcomingMovies } =
    useContext(MovieContext);

  return (
    <section id="home" className="mt-6">
      <Container>
        <Row>
          <TrendingMovies trendingMovies={trendingMovies} />
          <RecommendedMovies recommendedMovies={recommendedMovies} />
          <UpcomingMovies upcomingMovies={upcomingMovies} />
        </Row>
      </Container>
    </section>
  );
}

export default Home;

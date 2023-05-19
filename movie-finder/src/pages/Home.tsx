import { Container, Row } from "react-bootstrap";
//import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";
import TrendingMovies from "../components/TrendingMovies";
import PopularMovies from "../components/PopularMovies";
import { TrendingMovie } from "../components/utils/MovieTypes";

function Home() {
  const [trendingMovies, setTrenindMovies] = useState<TrendingMovie[] | null>(
    null
  );
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US"
      );
      const data = await res.json();
      setTrenindMovies(data.results);
    };

    fetchTrendingMovies();
  }, []);
  return (
    <section id="home" className="mt-6">
      <Container>
        <Row>
          <TrendingMovies trendingMovies={trendingMovies} />
          <PopularMovies />
        </Row>
      </Container>
    </section>
  );
}

export default Home;

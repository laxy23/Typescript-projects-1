import { Container, Col, Row } from "react-bootstrap";
// import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";
import Slider from "react-slick";

function Home() {
  const [trendingMovies, setTrenindMovies] = useState<null | any[]>(null);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US"
      );
      const data = await res.json();
      console.log(data.results);
      setTrenindMovies(data.results);
    };

    fetchTrendingMovies();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <section id="home" className="mt-6">
      <Container>
        <Row>
          <Col md={12} className="first-slider">
            <Slider {...settings}>
              {trendingMovies?.map((movie, i) => (
                <div key={i}>
                  <img
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        : ""
                    }
                    alt={movie.title}
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

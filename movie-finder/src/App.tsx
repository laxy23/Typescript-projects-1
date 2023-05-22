import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieSearch from "./pages/MovieSearch";
import MovieInfo from "./pages/MovieInfo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieProvider } from "./context/MovieContext";
import TvShows from "./pages/TvShows";

function App() {
  return (
    <>
      <Router>
        <MovieProvider>
          <NavMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movie/:name" element={<MovieSearch />} />
            <Route path="/movie/:id/details" element={<MovieInfo />} />
          </Routes>
        </MovieProvider>
      </Router>
    </>
  );
}

export default App;

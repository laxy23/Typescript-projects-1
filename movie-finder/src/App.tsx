import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieSearch from "./pages/MovieSearch";
import MovieInfo from "./pages/MovieInfo";
import TvShows from "./pages/TvShows";
import TvInfo from "./pages/TvInfo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieProvider } from "./context/MovieContext";

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
            <Route path="/tv/:id/details" element={<TvInfo />} />
          </Routes>
        </MovieProvider>
      </Router>
    </>
  );
}

export default App;

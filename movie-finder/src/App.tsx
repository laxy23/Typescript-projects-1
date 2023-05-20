import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
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
          </Routes>
        </MovieProvider>
      </Router>
    </>
  );
}

export default App;

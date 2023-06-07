import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import PrivateRoute from "./components/utils/PrivateRoute";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import CreateBook from "./pages/CreateBook";
import MyBooks from "./pages/MyBooks";
import BookDetail from "./pages/BookDetail";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-books/:id" element={<PrivateRoute />}>
            <Route path="/my-books/:id" element={<MyBooks />} />
          </Route>
          <Route path="/create-book" element={<PrivateRoute />}>
            <Route path="/create-book" element={<CreateBook />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/search/:value" element={<Search />} />
          <Route path="/bookDetail/:id" element={<PrivateRoute />}>
            <Route path="/bookDetail/:id" element={<BookDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

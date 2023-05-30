import { Col } from "react-bootstrap";
import blankCover from "../images/blank-cover.png";
import { Link } from "react-router-dom";
import { Books } from "./types/BookTypes";

interface BookItem {
  book: Books;
}
function BookList({ book }: BookItem) {
  return (
    <Col md={3} className="book-item">
      <img
        src={
          book?.volumeInfo?.imageLinks?.thumbnail
            ? book?.volumeInfo?.imageLinks?.thumbnail
            : blankCover
        }
        alt="Book thumbnail"
      />
      <h3>{book.volumeInfo?.title}</h3>
      <h4>
        By :{" "}
        {book.volumeInfo.authors ? book.volumeInfo?.authors[0] : "Undefined"}
      </h4>
      <Link
        to={book.volumeInfo?.infoLink}
        target="_blank"
        className="primary-btn"
      >
        View More
      </Link>
    </Col>
  );
}

export default BookList;

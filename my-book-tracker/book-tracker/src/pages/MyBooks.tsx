import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMyBooks, reset } from "../state/bookSlice";
import { useParams } from "react-router-dom";
import PageTitle from "../components/utils/PageTitle";
import { bookData } from "../components/types/StateTypes";
import { Link } from "react-router-dom";
import store from "../store/store";

function MyBooks() {
  const API_URL = "http://localhost:5000/static";
  const dispatch = useDispatch();
  const params = useParams();
  const id: string = params.id!;

  const myBooks: bookData[] | null = useSelector(
    (state: ReturnType<typeof store.getState>) => state.book.myBooks
  );
  const { isError } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.book
  );

  useEffect(() => {
    dispatch<any>(getMyBooks(id));
    if (isError) {
      console.log("Something went wrong!");
    }

    dispatch(reset());
  }, [dispatch]);

  return (
    <section id="my-books">
      <Container>
        <PageTitle title="My Books" />
        <Row>
          {myBooks?.map((book, i) => (
            <Col key={i} md={6} sm={6} lg={4} xl={3} className="book-item">
              <img src={`${API_URL}/${book.image}`} alt="book cover" />
              <h3>{book.title}</h3>
              <h4>By : {book.author}</h4>
              <Link to={`/bookDetail/${book._id}`} className="primary-btn">
                View More
              </Link>
            </Col>
          ))}
          {myBooks?.length === 0 && (
            <h3>
              You don't have any books created,{" "}
              <Link className="my-link" to="/create-book">
                please create a book!
              </Link>{" "}
            </h3>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default MyBooks;

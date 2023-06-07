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

  console.log(id);

  console.log(id);
  const myBooks: bookData[] | null = useSelector(
    (state: ReturnType<typeof store.getState>) => state.book.myBooks
  );
  const { isError } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.book
  );

  console.log(myBooks);

  useEffect(() => {
    dispatch<any>(getMyBooks(id));
    if (isError) {
      console.log("Something went wrong!");
    }

    dispatch(reset());
  }, [dispatch, isError, id]);

  return (
    <section id="my-books">
      <Container>
        <PageTitle title="My Books" />
        <Row>
          {myBooks?.map((book, i) => (
            <Col key={i} md={3} className="book-item">
              <img src={`${API_URL}/${book.image}`} alt="book cover" />
              <h3>{book.title}</h3>
              <h4>By : {book.author}</h4>
              <Link to={`/bookDetail/${book._id}`} className="primary-btn">
                View More
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MyBooks;

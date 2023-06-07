import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetail, reset } from "../state/bookSlice";
import { useEffect } from "react";
import store from "../store/store";
import { useParams } from "react-router-dom";

function BookDetail() {
  const dispatch = useDispatch();
  const API_URL = "http://localhost:5000/static";
  const params = useParams();
  const id: string = params.id!;

  const { book, isError } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.book
  );

  console.log(book);

  useEffect(() => {
    dispatch<any>(getBookDetail(id));
    if (isError) {
      console.log("Something went wrong");
    }

    dispatch(reset());
  }, []);

  return (
    <section id="book-detail">
      <Col md={6}>
        <img src={`${API_URL}/${book?.image}`} alt="book cover" />
      </Col>
      <Col md={6}></Col>
    </section>
  );
}

export default BookDetail;

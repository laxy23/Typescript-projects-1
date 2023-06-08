import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetail, reset } from "../state/bookSlice";
import { useEffect } from "react";
import store from "../store/store";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../components/utils/CarouselSettings";
import { Link } from "react-router-dom";

function BookDetail() {
  const dispatch = useDispatch();
  const API_URL = "http://localhost:5000/static";
  const IMG_URL = "http://localhost:5000/static";
  const params = useParams();
  const id: string = params.id!;

  const { book, myBooks, isError } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.book
  );

  useEffect(() => {
    dispatch<any>(getBookDetail(id));
    if (isError) {
      console.log("Something went wrong");
    }

    dispatch(reset());
  }, [id]);

  const data = [
    {
      id: 1,
      title: "Author",
      content: book?.author,
    },
    {
      id: 2,
      title: "Isbn",
      content: book?.isbn,
    },
    {
      id: 3,
      title: "Pages",
      content: book?.pages,
    },
    {
      id: 4,
      title: "Type",
      content: book?.type,
    },
  ];

  return (
    <section id="book-detail">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <img src={`${API_URL}/${book?.image}`} alt="book cover" />
          </Col>
          <Col md={6} className="item-2">
            <h3>{book?.title}</h3>
            {data.map((item, i) => (
              <h4 key={i}>
                <span className="detail-title">{item.title}: </span>
                {item.content}
              </h4>
            ))}
            <p>
              <span className="detail-title">Description:</span>{" "}
              {book?.description}
            </p>
          </Col>
          <Slider {...settings} className="detail-slider">
            {myBooks?.map((book, i) => (
              <div className="book-item" key={i}>
                <img src={`${IMG_URL}/${book.image}`} alt="book cover" />
                <h3>{book?.title}</h3>
                <h4>By : {book?.author}</h4>
                <Link to={`/bookDetail/${book?._id}`} className="primary-btn">
                  View More
                </Link>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
}

export default BookDetail;

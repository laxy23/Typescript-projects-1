import { Container, Col, Row } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Books } from "../components/types/BookTypes";
import blankCover from "../images/blank-cover.png";

function Search() {
  const [data, setData] = useState<Books[] | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchBookByName = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${params.value}&key=AIzaSyCjdeIADIDNVx7HR5rZVWENhABE1oMi0WM`
        );
        const resData = await res.json();
        setData(resData.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBookByName();
  }, [params.value]);
  return (
    <section id="search">
      <Container>
        <PageTitle title="Results" />
        <Row>
          {data?.map((book, i) => (
            <Col md={3} key={i} className="book-item">
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
                {book.volumeInfo.authors
                  ? book.volumeInfo?.authors[0]
                  : "Undefined"}
              </h4>
              <Link
                to={book.volumeInfo?.infoLink}
                target="_blank"
                className="primary-btn"
              >
                View More
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Search;

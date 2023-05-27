import { Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";

// AIzaSyCjdeIADIDNVx7HR5rZVWENhABE1oMi0WM
//Books API has not been used in project 406139447757 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/books.googleapis.com/overview?project=406139447757 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.

function List() {
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&orderBy=relevance&maxResults=20&key=AIzaSyCjdeIADIDNVx7HR5rZVWENhABE1oMi0WM"
        );
        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <section id="list">
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}

export default List;

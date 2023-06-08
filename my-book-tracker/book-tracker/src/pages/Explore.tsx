import { Container, Row, Dropdown } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";
import { useState, useEffect } from "react";
import { BookType, Books } from "../components/types/BookTypes";
import BookList from "../components/BookList";

function Explore() {
  const [type, setType] = useState<BookType | string | undefined>(
    BookType.Psychology
  );
  const [result, setResult] = useState<Books[] | null>(null);

  useEffect(() => {
    const fetchBookByType = async () => {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${type}&orderBy=relevance&maxResults=20&key=AIzaSyCjdeIADIDNVx7HR5rZVWENhABE1oMi0WM`
      );

      const data = await res.json();

      setResult(data.items);
    };

    fetchBookByType();
  }, [type]);

  const onChange = (e: string | null) => {
    const bookType = e?.substring(2);
    setType(bookType);
  };
  return (
    <section id="explore">
      <Container className="item-container">
        <PageTitle title="Explore" />
        <Dropdown className="option" onSelect={onChange}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/Fiction">Fiction</Dropdown.Item>
            <Dropdown.Item href="#/Science Fiction/Fantasy">
              Science Fiction/Fantasy
            </Dropdown.Item>
            <Dropdown.Item href="#/Self-help/Personal Development">
              Self-help/Personal Development
            </Dropdown.Item>
            <Dropdown.Item href="#/Business/Economics">
              Business/Economics
            </Dropdown.Item>
            <Dropdown.Item href="#/Psychology">Psychology</Dropdown.Item>
            <Dropdown.Item href="#/Travel">Travel</Dropdown.Item>
            <Dropdown.Item href="#/Religion/Spirituality">
              Religion/Spirituality
            </Dropdown.Item>
            <Dropdown.Item href="#/Health/Fitness">
              Health/Fitness
            </Dropdown.Item>
            <Dropdown.Item href="#/Children's Books">
              Children's Books
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Row>
          {result?.map((book, i) => (
            <BookList book={book} key={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Explore;

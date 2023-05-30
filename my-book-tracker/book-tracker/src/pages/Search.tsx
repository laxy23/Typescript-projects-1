import { Container, Row } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Books } from "../components/types/BookTypes";
import BookList from "../components/BookList";

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
            <BookList book={book} key={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Search;

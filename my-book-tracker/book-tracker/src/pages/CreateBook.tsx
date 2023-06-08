import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBook, reset } from "../state/bookSlice";

function CreateBook() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    isbn: 0,
    pages: 0,
    type: "fiction",
    description: "",
    image: "" as any,
  });
  const dispatch = useDispatch();

  const { author, title, isbn, pages, type, description, image } = form;

  const { isError, isLoading, isSuccess } = useSelector(
    (state: any) => state.book
  );

  useEffect(() => {
    if (isError) {
      console.log("Something went wrong!");
    }

    dispatch(reset());
  }, [isError, isSuccess]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the uploaded file

    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        image: file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("isbn", isbn.toString());
    formData.append("pages", pages.toString());
    formData.append("type", type);
    formData.append("image", image);

    dispatch<any>(createBook(form));
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <section id="create-book">
      <Container>
        <PageTitle title="Create Book" />
        <Row>
          <Col md={12} className="item-1">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="author">Author</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Author"
                  name="author"
                />
              </div>
              <div className="input-container">
                <label htmlFor="title">Title</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Title"
                  name="title"
                />
              </div>
              <div className="input-container">
                <label htmlFor="isbn">Isbn</label>
                <input
                  onChange={handleChange}
                  type="number"
                  placeholder="Isbn"
                  name="isbn"
                />
              </div>
              <div className="input-container">
                <label htmlFor="pages">Pages</label>
                <input
                  onChange={handleChange}
                  type="number"
                  placeholder="Pages"
                  name="pages"
                />
              </div>
              <div className="input-container">
                <label htmlFor="type">Type</label>
                <select onChange={handleChange} name="type">
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="image">Upload Image</label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  id="images"
                  name="images"
                />
              </div>
              <div className="desc-container">
                <div className="input-container">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Description"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="button-container">
                  <input type="submit" className="form-btn" value="Submit" />
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CreateBook;

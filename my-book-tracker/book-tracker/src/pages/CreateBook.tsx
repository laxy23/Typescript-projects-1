import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";
import { useState } from "react";

function CreateBook() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    isbn: "",
    pages: 0,
    type: "fiction",
    description: "",
    images: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    console.log(e.target.value);
    console.log(e);

    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(123);
  };

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
                  onChange={handleChange}
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

import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "../components/utils/PageTitle";

function CreateBook() {
  return (
    <section id="create-book">
      <Container>
        <PageTitle title="Create Book" />
        <Row>
          <Col md={12} className="item-1">
            <form>
              <div className="input-container">
                <label htmlFor="author">Author</label>
                <input type="text" placeholder="Author" />
              </div>
              <div className="input-container">
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" />
              </div>
              <div className="input-container">
                <label htmlFor="isbn">Isbn</label>
                <input type="number" placeholder="Isbn" />
              </div>
              <div className="input-container">
                <label htmlFor="pages">Pages</label>
                <input type="number" placeholder="Pages" />
              </div>
              <div className="input-container">
                <label htmlFor="type">Type</label>
                <select>
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="image">Upload Image</label>
                <input type="file" accept=".jpg,.png,.jpeg" id="images" />
              </div>
              <div className="desc-container">
                <div className="input-container">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Description"
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

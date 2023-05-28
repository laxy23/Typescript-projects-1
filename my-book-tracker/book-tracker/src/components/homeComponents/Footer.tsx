import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  const data = [
    {
      id: 1,
      title: "Company",
      list: ["How it Works", "Services", "About"],
    },
    {
      id: 2,
      title: "Resources",
      list: ["Blog", "FAQs", "Support"],
    },
    {
      id: 3,
      title: "Legal",
      list: ["Terms of Service", "Privacy Policy", "Copyright Notice"],
    },
  ];
  return (
    <footer id="main-footer">
      <Container>
        <Row>
          <Col md={3}>
            <h3>Librify</h3>
            <div className="icons">
              <ul>
                <li>
                  <AiFillInstagram />
                </li>
                <li>
                  <AiFillTwitterCircle />
                </li>
                <li>
                  <AiFillFacebook />
                </li>
              </ul>
            </div>
          </Col>
          {data.map((item) => (
            <Col md={3} key={item.id} className="item">
              <h3>{item.title}</h3>
              <ul>
                {item.list.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

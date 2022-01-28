import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#05445e", color: "#d4f1f4" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; DEVOL | Built by <div>Shashwat Kumar Mohanty</div>
            <span>This is not an original website so please don't pay</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

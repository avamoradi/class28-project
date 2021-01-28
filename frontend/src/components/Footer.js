import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
        </Row>
        <Link>
          <Row>
            <Col className='text-center py-3'>Cookie Policy</Col>
          </Row>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;

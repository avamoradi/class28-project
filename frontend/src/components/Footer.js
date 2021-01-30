import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CookiePopup from "../components/CookiePopup";

const Footer = () => {
  const cookiesFromStorage = localStorage.getItem("isCookies")
    ? JSON.parse(localStorage.getItem("isCookies"))
    : true;

  const [cookiePopup, setCookiePopup] = useState(cookiesFromStorage);
  useEffect(() => {
    localStorage.setItem("isCookies", cookiePopup);
  }, [cookiePopup]);

  const popUpCookie = () => {
    localStorage.setItem("isCookies", true);
    setCookiePopup(localStorage.getItem("isCookies"));
  };

  return (
    <footer>
      <Container>
        {cookiePopup && <CookiePopup show={true} onHide={setCookiePopup} />}

        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
        </Row>
        <Row onClick={(e) => popUpCookie()}>
          <Col className='cursor text-center py-3'>Cookie Policy</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

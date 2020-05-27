import React from "react";
import { Container, Row, Col } from "reactstrap";
import Linkedin from "../../assets/Home/linkedin-logo.png";
import Medium from "../../assets/Home/medium-logo.png";
import Twitter from "../../assets/Home/twitter.png";
import Facebook from "../../assets/Home/fb.png";

import "./styles.scss";

export default function () {
  return (
    <div>
      <Container fluid className="footer-container">
        <Row className="footer-wrapper">
          <Col className="description-col" lg="5">
            Digital marketing is all about iterations, optimizations &
            improvements. A successful strategy is fluid and responsive to
            change.
          </Col>
          <Col className="links-col">
            {[
              "Digital Marketing",
              "User Experience    ",
              "Content Strategy",
              "Contact Perhaps",
            ].map((i, index) => (
              <div key={index}>{i}</div>
            ))}
          </Col>
          <Col className="social-col">
            <p className="social-title">FOLLOW ME</p>
            {[Linkedin, Facebook, Twitter, Medium].map((i, index) => (
              <img className="social-images" src={i} alt={i} />
            ))}
          </Col>
        </Row>
      </Container>
      <p className="copy-rights">copyrights 2020 all rights reserved. </p>
    </div>
  );
}

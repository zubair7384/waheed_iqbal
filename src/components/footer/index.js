import React from "react";
import { Link } from "gatsby";
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
              {
                link: "userExperience",
                label: "user experience",
              },
              {
                link: "contentStrategy",
                label: "content strategy",
              },
              {
                link: "digitalMarketing",
                label: "digital marketing",
              },
            ].map((i, index) => (
              <Link className="links" key={index} to={i.link}>
                {i.label}
              </Link>
            ))}
          </Col>
          <Col className="social-col">
            <p className="social-title">FOLLOW ME</p>
            {[
              {
                social: Linkedin,
                link: "https://linkedin.com/in/waheed-iqbal1",
              },
              { social: Facebook, link: "https://facebook.com/waheed91" },
              { social: Twitter, link: "https://twitter.com/waheediqbal_" },
              { social: Medium, link: "https://medium.com/@waheediqbal_" },
            ].map((i, index) => (
              <a href={i.link} target="_blank">
                <img className="social-images" src={i.social} alt={i.social} />
              </a>
            ))}
          </Col>
        </Row>
      </Container>
      <p className="copy-rights">copyrights 2020 all rights reserved. </p>
    </div>
  );
}

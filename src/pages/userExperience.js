import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/layout";
import HeroContainer from "../components/heroContainer";
import CallToAction from "../components/callToAction";
import LeftImageSec from "../components/leftImageSec";
import RightImageSec from "../components/rightImageSec";
import H2 from "../components/h2";
import UserCentric from "../assets/UserExperience/user-centric-design.webp";
import Design from "../assets/UserExperience/ui-ux-design.webp";
import UniqueUx from "../assets/UserExperience/user-experience-design.webp";
import DataUx from "../assets/UserExperience/data-driven-ux-model.webp";

import "./scss/userExperience.scss";

export default function () {
  return (
    <Layout>
      <Helmet>
        <title>
          Good UX is User-Centric Design | User Experience | Waheed Iqbal
        </title>
        <meta
          name="description"
          content="How to design for the user while reflecting your brand image? Make UX the attractive force in your digital marketing strategy."
        />
      </Helmet>
      <div className="bg-primary">
        <HeroContainer
          src={UserCentric}
          className="bg-primary"
          boldText="user-centric"
          text="design is the key"
        />
      </div>
      <LeftImageSec
        src={Design}
        text="a great UX leads to increased engagement & user retention,
            ultimately increasing conversions."
      />
      <RightImageSec
        src={UniqueUx}
        text="designing for your target audience while reflecting your brand image is essential in creating unique user experiences."
      />
      <div className="bg-primary call-to-action-ux">
        <CallToAction
          text="it's time to re-analyze your USER EXPERIENCE."
          buttonText="UX analysis"
        />
      </div>
      <Container fluid className="data-ux-container">
        <Row className="data-ux-wrapper">
          <Col className="data-ux-text-col">
            <H2
              className="data-ux-text"
              text="using data driven UX to optimize engagements is the ultimate goal of user-centric digital marketing approach."
            />
          </Col>
          <Col className="data-ux-image-col">
            <img className="ux-image" src={DataUx} alt="data ux" />
          </Col>
        </Row>
      </Container>
      <div className="bg-primary call-to-action-ux-two">
        <CallToAction
          text="learn more about data driven UX."
          buttonText="ask for more"
        />
      </div>
    </Layout>
  );
}

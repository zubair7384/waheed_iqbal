import React, { useState } from "react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import H2 from "../components/h2";
import CallToAction from "../components/callToAction";
import CustomButton from "../components/button";
import HeroContainer from "../components/heroContainer";
import ImageTextBanner from "../components/imageTextBanner";
import CustomModal from "../components/modal";
import ContactForm from "../components/contactForm";
import Tag from "../components/tag";
import { Container, Row, Col } from "reactstrap";
import HomeImage from "../assets/Home/digital-is-the-new-mainstream.webp";
import GoogleAds from "../assets/Home/logo1.png";
import GoogleAnalytics from "../assets/Home/logo2.png";
import GoogleTagManager from "../assets/Home/logo3.png";
import SBuffer from "../assets/Home/logo4.png";
import FacebookAds from "../assets/Home/logo5.png";
import TwitterAds from "../assets/Home/logo6.png";
import QuoteLogo from "../assets/Home/quotes.webp";
import RealMarketing from "../assets/Home/real-marketing-takes-time.webp";
import ProfileImage from "../assets/Home/waheed-iqbal.webp";
import SearchEngineOptimization from "../assets/Home/search-engine-optimization.svg";
import UserExperience from "../assets/Home/user-experience-design.svg";
import AdvertisingDesign from "../assets/Home/advertising-design.svg";
import "./scss/home.scss";

const imageArray = [
  GoogleAds,
  GoogleAnalytics,
  GoogleTagManager,
  SBuffer,
  FacebookAds,
  TwitterAds,
];

const seoArray = [
  {
    link: SearchEngineOptimization,
    text: "Search Engine Optimization",
  },

  {
    link: UserExperience,
    text: "User Experience",
  },

  {
    link: AdvertisingDesign,
    text: "Advertising Design",
  },
];

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <HeroContainer
        src={HomeImage}
        boldText="digital"
        text="is the new mainstream"
      />
      <Container fluid className="logos-container">
        <div className="logos-wrapper">
          {imageArray.map((image, index) => (
            <img className="logos" src={image} alt={image} />
          ))}
        </div>
      </Container>
      <Container className="quote-container">
        <Row className="quote-wrapper">
          <Col sm="12" lg="8" className="quote-col">
            <p className="quote">
              It's much easier to double your business by doubling your
              conversion rate than by doubling your traffic.
            </p>
            <span className="aurther">Jeff Eisenberg</span>
          </Col>
          <Col sm="12" lg="3" className="quote-logo-col">
            <img className="quote-image" src={QuoteLogo} alt="quote logo" />
          </Col>
        </Row>
      </Container>
      <CallToAction
        text="it's time to rethink your content STRATEGY."
        buttonText="help me rethink."
      />
      <ImageTextBanner
        src={RealMarketing}
        text="real marketing takes time, viral is short lived."
      />
      <Container fluid className="profile-container">
        <Row className="profile-wrapper">
          <Col sm="12" lg="5" className="profile-logo-col">
            <img
              className="profile-image"
              src={ProfileImage}
              alt="marketing logo"
            />
          </Col>
          <Col sm="12" lg="7" className="profile-col">
            <H2
              className="profile-text"
              text="Good UX amounts to good business. Digital marketing is part user experience & part mobile."
            />
            <CustomButton
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="profile-button"
              text="ask me why?"
            />
          </Col>
          <CustomModal
            modalBody={<ContactForm />}
            modalToggle={() => setIsModalOpen(!isModalOpen)}
            isModalOpen={isModalOpen}
          />
        </Row>
      </Container>
      <Container fluid className="seo-container">
        <p className="seo-title">optimize, iterate, repeat</p>
        <Row className="seo-wrapper">
          {seoArray.map((i, index) => (
            <Col sm="12" lg="4" className="images-col" key={index}>
              <img classname="seo-image" src={i.link} alt={i} />
              <p className="images-title">{i.text}</p>
            </Col>
          ))}
        </Row>
        <div className="tags-wrapper">
          {[
            "keyword research",
            "content writing",
            "social media",
            "ppc",
            "email",
            "analytics",
          ].map((i) => (
            <Tag label={i} />
          ))}
        </div>
      </Container>
      <CallToAction
        text="thinking about redefining your digital STRATEGY."
        buttonText="CONTACT PERHAPS?"
      />
    </Layout>
  );
};
export default IndexPage;

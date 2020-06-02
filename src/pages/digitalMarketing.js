import React from "react";
import Layout from "../components/layout";
import HeroContainer from "../components/heroContainer";
import OneLineBanner from "../components/oneLineBanner";
import RightImageSec from "../components/rightImageSec";
import LeftImageSec from "../components/leftImageSec";
import CallToAction from "../components/callToAction";
import ImageTextBanner from "../components/imageTextBanner";
import MarketingHomeImage from "../assets/digitalMarketing/digital-marketing-takes-time.webp";
import Strategy from "../assets/digitalMarketing/what-audience-needs.webp";
import Devise from "../assets/digitalMarketing/holistic-strategy.webp";
import Complex from "../assets/digitalMarketing/digital-marketing-is-complex.webp";

import "./scss/digitalMarketing.scss";

export default function () {
  return (
    <Layout>
      <HeroContainer
        src={MarketingHomeImage}
        boldText="marketing"
        text="takes time, even digital"
      />
      <OneLineBanner text="digital marketing is always multi-dimentional" />
      <RightImageSec
        src={Strategy}
        text="figuring out what your target audience wants is the most fundamental thing in digital marketing strategy. "
      />
      <LeftImageSec
        src={Devise}
        text="devise a hoslistic strategy including a balanced mix of organic, paid and other proven digital marketing tactics."
      />
      <CallToAction
        class="dcta1"
        text="devise your digital marketing strategy."
        buttonText="contact"
      />
      <ImageTextBanner
        src={Complex}
        text="digital marketing is more complex than you think."
      />
      <CallToAction
        text="learn more about digital marketing."
        buttonText="ask for more"
      />
    </Layout>
  );
}

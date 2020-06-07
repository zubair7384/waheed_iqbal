import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import HeroContainer from "../components/heroContainer";
import RightImageSec from "../components/rightImageSec";
import LeftImageSec from "../components/leftImageSec";
import CallToAction from "../components/callToAction";
import ImageTextBanner from "../components/imageTextBanner";
import OneLineBanner from "../components/oneLineBanner";
import UserFollow from "../assets/ContentStrategy/users-follow-great-content.webp";
import Attract from "../assets/ContentStrategy/relevant-content.webp";
import ForUser from "../assets/ContentStrategy/content-for-users.webp";
import Creation from "../assets/ContentStrategy/content-creation-takes-time.webp";

import "./scss/contentStrategy.scss";

export default function () {
  return (
    <Layout>
      <Helmet>
        <title>
          Focus on Content, Users will Follow | Content Strategy | Waheed Iqbal
        </title>
        <meta
          name="description"
          content="People always look for fresh content. Provide the content your audience needs. Let's reimagine your content strategy."
        />
      </Helmet>

      <HeroContainer
        src={UserFollow}
        text={
          <div>
            focus on <span className="bold"> content,</span> users will follow
          </div>
        }
      />
      <OneLineBanner text="what people look for is relevant CONTENT." />
      <RightImageSec
        src={Attract}
        text="good relevant content glues audiences, figure out the best possible content options to attract traffic."
      />
      <LeftImageSec
        src={ForUser}
        text="always create content for users, figure out what they want, keyword research is a good way to start."
      />
      <CallToAction
        text="brainstorm your content STRATEGY."
        buttonText="brainstorm"
      />
      <ImageTextBanner
        src={Creation}
        text="it might take some effort to create great content."
      />
      <CallToAction
        text="learn more about content strategies."
        buttonText="ask for more"
      />
    </Layout>
  );
}

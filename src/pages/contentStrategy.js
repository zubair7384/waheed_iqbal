import React from "react"
import Layout from "../components/layout"
import HeroContainer from "../components/heroContainer"
import RightImageSec from "../components/rightImageSec"
import LeftImageSec from "../components/leftImageSec"
import CallToAction from "../components/callToAction"
import ImageTextBanner from "../components/imageTextBanner"
import OneLineBanner from "../components/oneLineBanner"
import UserFollow from "../assets/ContentStrategy/users-follow-great-content.png"
import Attract from "../assets/ContentStrategy/attract.png"
import ForUser from "../assets/ContentStrategy/content-for-user.png"
import Creation from "../assets/ContentStrategy/content-creation-takes-effort.png"

import "./scss/contentStrategy.scss"

export default function () {
  return (
    <Layout>
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
  )
}

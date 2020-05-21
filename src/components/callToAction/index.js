import React, { useState } from "react"
import { Container, Row } from "reactstrap"
import H2 from "../h2"
import CustomButton from "../button"
import CustomModal from "../modal"
import ContactForm from "../contactForm"
import "./styles.scss"

export default function CallToAction(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container fluid className={`call-to-action-container ${props.class}`}>
      <Row className="call-to-action-wrapper">
        <H2 className={`h2 ${props.className}`} text={props.text} />
        <CustomButton
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="call-to-action-button"
          text={props.buttonText}
        />
      </Row>
      <CustomModal
        modalBody={<ContactForm />}
        modalToggle={() => setIsModalOpen(!isModalOpen)}
        isModalOpen={isModalOpen}
      />
    </Container>
  )
}

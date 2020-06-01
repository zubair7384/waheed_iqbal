import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Button from "../button";
// import CustomModal from "../../components/modal";
// import ContactForm from "../../components/contactForm";
import emailjs from "emailjs-com";
import "./styles.scss";

export default function () {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "waheedtamplate",
        e.target,
        "user_xT0ZxX445uX02kOFR7crE"
      )
      .then(
        (result) => {
          console.log("result", result.text);
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  }

  return (
    <Container>
      <Row>
        <Col className="contact-form">
          <AvForm onSubmit={sendEmail}>
            <div className="input-wrapper">
              <label className="form-label" for="fname">
                Full Name
              </label>
              <AvField
                className="form-input"
                type="text"
                id="fname"
                name="user_name"
                placeholder="John Doe"
                errorMessage="Please type your name"
                validate={{
                  required: { value: true },
                  pattern: { value: "/^[A-Za-z]+$/" },
                  minLength: { value: 6 },
                  maxLength: { value: 16 },
                }}
              />
            </div>
            <div className="input-wrapper">
              <label className="form-label" for="email">
                Email
              </label>
              <AvField
                className="form-input"
                type="email"
                id="email"
                name="user_email"
                placeholder="johndoe@example.com"
                errorMessage="Please type a valid email"
                validate={{ required: { value: true }, email: true }}
              />
            </div>
            <div className="input-wrapper">
              <label className="form-label" for="subject">
                Message
              </label>
              <AvField
                placeholder="Write your intro message here"
                className="form-textarea"
                name="message"
                id="message"
                type="message"
                maxlength="2500"
                errorMessage="Please write your message"
                validate={{
                  required: { value: true },
                }}
              />
            </div>
            <Button className="form-button" text="Submit" type="submit" />
          </AvForm>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import Button from "../button"
import axios from "axios"

import "./styles.scss"

export default function () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(evt) {
    alert("Your mail has been sent")
    evt.preventDefault()
    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    })
  }

  return (
    <Container>
      <Row>
        <Col className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label className="form-label" for="fname">
                Full Name
              </label>
              <input
                className="form-input"
                type="text"
                id="fname"
                name="firstname"
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label className="form-label" for="subject">
                Message
              </label>
              <textarea
                placeholder="Write your intro message here"
                className="form-textarea"
                id="noter-text-area"
                name="textarea"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <Button className="form-button" text="Submit" type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  )
}

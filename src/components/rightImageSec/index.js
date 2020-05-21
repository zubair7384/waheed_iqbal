import React from "react"
import { Container, Row, Col } from "reactstrap"
import H2 from "../../components/h2"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <Container fluid className="unique-ux-container">
        <Row className="unique-ux-wrapper">
          <Col className="unique-ux-text-col">
            <H2 className="unique-ux-text" text={props.text} />
          </Col>
          <Col className="unique-ux-image-col">
            <img className="ux-image" src={props.src} alt="unique ux" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

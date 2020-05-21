import React from "react"
import { Container, Row, Col } from "reactstrap"
import H2 from "../../components/h2"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <Container fluid className="great-ux-container">
        <Row className="great-ux-wrapper">
          <Col className="great-ux-image-col">
            <img className="ux-image" src={props.src} alt="design" />
          </Col>
          <Col className="great-ux-text-col">
            <H2 className="great-ux-text" text={props.text} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

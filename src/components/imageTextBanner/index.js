import React from "react"
import { Container, Row, Col } from "reactstrap"
import H2 from "../../components/h2"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <Container fluid className="real-marketing-container">
        <Row className="real-marketing-wrapper">
          <Col sm="12" lg="5" className="real-marketing-logo-col">
            <img
              className="real-marketing-image"
              src={props.src}
              alt="marketing logo"
            />
          </Col>
          <Col sm="12" lg="7" className="real-marketing-col">
            <H2 className="real-marketing-text" text={props.text} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

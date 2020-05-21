import React from "react"
import { Container, Row, Col } from "reactstrap"
import H2 from "../h2"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <Container fluid className="relevant-contant-container">
        <Row className="relevant-contant-wrapper">
          <Col className="relevant-contant-col">
            <H2 className="relevant-contant" text={props.text} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

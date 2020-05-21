import React from "react"
import { Container, Row, Col } from "reactstrap"
import H1 from "../h1"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <Container fluid className={`${props.className} hero-container`}>
        <Row className={` ${props.hero} hero-wrapper`}>
          <Col className="hero-text" xs="12" md="6">
            <H1
              text={
                <div>
                  <span className="bold">{props.boldText}</span> {props.text}
                </div>
              }
            />
          </Col>
          <Col className={` ${props.imageWrapper} hero-image`} xs="12" md="5">
            <img src={props.src} alt="digital is the new mainstream" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

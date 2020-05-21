import React from "react"
import "./styles.scss"

export default function H2(props) {
  return (
    <div>
      <h2 className={`heading-two ${props.className}`}>{props.text}</h2>
    </div>
  )
}

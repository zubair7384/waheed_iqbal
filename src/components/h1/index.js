import React from "react"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <h1 className="hero-text">{props.text}</h1>
    </div>
  )
}

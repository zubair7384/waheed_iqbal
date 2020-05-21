import React from "react"
import "./styles.scss"

export default function (props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`primary-button ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  )
}

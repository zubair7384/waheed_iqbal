import React from "react"
import "./styles.scss"

export default function Tag(props) {
  return <button className="tag">{props.label}</button>
}

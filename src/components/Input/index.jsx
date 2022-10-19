import React from "react";
import "./style.css";

export default function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="input">
        <img src={props.icon} />
        <input
          placeholder={props.placeholder}
          type="number"
          id={props.id}
          value={props.value}
          {...props}
        ></input>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { functionSelectTip, selected } from "../../redux/reducers/tips";

export default function Button(props) {
  return (
    <input
      className={props.selected ? "active" : ""}
      type={props.type}
      value={props.value}
      label={props.label}
      placeholder={props?.placeholder}
      {...props}
    />
  );
}

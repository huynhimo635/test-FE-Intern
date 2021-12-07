import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button className="button">{props.name ? props.name : "see more"}</button>
  );
};

export default Button;

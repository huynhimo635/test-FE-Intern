import React from "react";
import("./card.css");

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};
export const CardHeader = (props) => {
  return <div className="card-header">{props.children}</div>;
};
export const CardBody = (props) => {
  return (
    <div className="card-body">
      {props.img ? <img src={props.img} alt="" /> : null}
      {props.children}
    </div>
  );
};
export const CardFooter = (props) => {
  return <div className="card-footer">{props.children}</div>;
};

export default Card;

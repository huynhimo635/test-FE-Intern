import React from "react";
import "./section.css";

const Section = (props) => {
  return <div className="section">{props.children}</div>;
};
export const SectionTitle = (props) => {
  return (
    <div style={{ alignItems: props.align }} className="section__title">
      {props.children}
    </div>
  );
};
export const SectionBody = (props) => {
  return <div className="section__body">{props.children}</div>;
};

export default Section;

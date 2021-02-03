import React from "react";
import "./Icons.css";

export const Icon = ({ name, color, size }) => {
  return <span className={`storybook-icon icon-${name}`} style={{ color, fontSize: size }}></span>;
};

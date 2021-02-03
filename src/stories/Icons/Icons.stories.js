import React from "react";

import "../../assets/icons/font-icons.scss";
import iconsList from "./icons-data.json";

import { Icon } from "./Icons";

export default {
  title: "Example/All icons",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Icons = () => {
  return (
    <div className="storybook-icons-container">
      {iconsList.map((icon, index) => {
        return <Icon key={index} name={icon} />;
      })}
    </div>
  );
};

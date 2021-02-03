import React, { useState, useEffect } from "react";

import "../../assets/icons/font-icons.scss";
import iconsList from "./icons-data.json";

import { Icon } from "./Icons";

export default {
  title: "Example/All icons",
  component: Icon,
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
  },
};

export const Icons = ({ color, size }) => {
  const [icons, setIcons] = useState(iconsList);
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setIcons(iconsList.filter((icon) => icon.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  return (
    <div className="storybook-icons-container">
      <input type="text" placeholder="Search..." value={search} onChange={onChange} />
      <div>
        {icons.map((icon, index) => {
          return (
            <div className="storybook-icon-block" key={index}>
              <Icon name={icon} color={color} size={size} />
              <p>{icon}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

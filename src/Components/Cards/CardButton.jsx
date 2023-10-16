import React from "react";
import { Link } from "react-router-dom";

const CardButton = () => {
  // An array of button labels and their corresponding routes
  const buttons = [
    { label: "1", route: "/home" },
    { label: "2", route: "/post2" },
    { label: "3", route: "/post3" },
    { label: "4", route: "/post4" },
    { label: "5", route: "/card5" },
  ];

  return (
    <div className="flex flex-wrap justify-center py-4 gap-4">
      {buttons.map((button, index) => (
        <Link to={button.route} key={index}>
          <button className="px-4 py-2 text-sm text-white bg-red-500 rounded shadow">
            {button.label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CardButton;

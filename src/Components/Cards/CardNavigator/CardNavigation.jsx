import React from "react";
import { useLocation } from "react-router-dom";
import Main from "../../Main/Main";

const CardNavigation = () => {
  const location = useLocation(); // You missed the parentheses to call the function

  const NavigateCards = () => {
    if (
      location.pathname === "/single" ||
      location.pathname === "/double" ||
      location.pathname === "/onebhk" ||
      location.pathname === "/twobhk" ||
      location.pathname === "/threebhk" ||
      location.pathname === "/others" ||
      location.pathname === "/userpost" ||
      location.pathname === "/userLogin" ||
      location.pathname === "/post2"
    ) {
      return null;
    } else if (location.pathname.startsWith("/home/")) {
      return null;
    } else {
      return <Main />;
    }
  };

  return <div>{NavigateCards()}</div>; // Call the function to render its result
};

export default CardNavigation;

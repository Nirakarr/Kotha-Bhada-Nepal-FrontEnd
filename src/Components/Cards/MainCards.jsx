import React from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import CardButton from "./CardButton";
import DoubleRoom from "../Header/DoubleRoom";
import SingleRoom from "../Header/SingleRooms";
import OneBHK from "../Header/OneBHK";
import TwoBHK from "../Header/TwoBHK";
import Others from "../Header/Others";
import UserLogin from "../UserLogin/UserLogin";
const MainCards = () => {
  const location = useLocation(); // Get the current location

  const renderCard = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/home/button1" ||
      location.pathname === "/home"
    ) {
      return (
        <div>
          <Card />
          <CardButton />
        </div>
      );
    } else if (location.pathname === "/single") {
      return <SingleRoom />;
    } else if (location.pathname === "/double") {
      return <DoubleRoom />;
    } else if (location.pathname === "/onebhk") {
      return <OneBHK />;
    } else if (location.pathname === "/twobhk") {
      return <TwoBHK />;
    } else if (location.pathname === "/others") {
      return <Others />;
    } else if (location.pathname === "/userpost") {
      return <UserLogin />;
    } else {
      return <></>;
    }
  };

  return (
    <div className="w-full bg-white py-3 bg-[#6f9196]">
      <div className="md:max-w-[1500px] h-[auto] m-auto md:grid grid-cols-1 gap-4">
        <div className="m-4">{renderCard()}</div>
        {/* <div className="m-4">{renderCard()}</div>
        <div className="m-4">{renderCard()}</div> */}
      </div>
      {/* <div className="md:max-w-[1500px] h-[auto] m-auto my-4 md:grid grid-cols-1 gap-4 md:flex">
        <div className="m-4">{renderCard()}</div>
      </div> */}
    </div>
  );
};

export default MainCards;

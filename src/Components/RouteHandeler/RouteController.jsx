import React from "react";
import NavBar1 from "../NavBar1"; // Import Main component if needed
import MainCards from "../Cards/MainCards";
import Footer from "../Footer/Footer"; // Import Footer component if needed
const RouteController = () => {
  return (
    <div>
      <NavBar1 /> 
      <MainCards />
      <Footer />
    </div>
  );
};

export default RouteController;

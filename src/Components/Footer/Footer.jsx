import React from "react";
import { Icons } from "./Menu";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import MainInfo from "./MainInfo";
import logo from "../../Assets/kotha bhada.jpg";
const Footer = () => {
  return (
    <footer className="bg-[#6f9196] text-white mx-2 my-2">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-2xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <div className="flex">
            <Link to="" className="mx-5 hover:text-blue-500">
              Inbox us for any Concerns
            </Link>
          </div>

          <div className="flex">
            <Link to="" className="mx-5 hover:text-blue-500">
              Request Rooms you need
            </Link>
          </div>
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your mail"
            className="text-[black]
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Payment Partners(Coming soon)</h1>
      </div>
      <MainInfo></MainInfo>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-xl pb-8"
      >
        <div className="flex items-center justify-center">
          <Link to="/home">
            <img src={logo} className="w-[120px] h-30" alt="Logo" />
          </Link>
          <span className="ml-2 md:text-xl text-l">
            © Kotha Bhada Nepal ,2023
          </span>
        </div>
        <span className="md:text-2xl">Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;

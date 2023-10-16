import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CardNavigation from "./Cards/CardNavigator/CardNavigation";
import RoomFinder from "../Assets/kotha bhada.jpg";
const NavBar1 = () => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="fixed w-full h-[80px] border-b"
        style={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          fontFamily: "Roboto",
          top: 0,
          zIndex: 1,
        }}
      >
        <div className=" md-max-w-[1480px] w-full h-full flex justify-between items-center bg-gray-100 px-2">
          <Link to="/">
            <img src={RoomFinder} className="w-[90px] h-[20] ml-4" alt="logo" />
          </Link>
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-4 text-2xl">
              <li>
                <Link to="/home" className="border p-2 rounded hover:bg-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/single"
                  className="border p-2 rounded hover:bg-white"
                >
                  Single Room
                </Link>
              </li>
              <li>
                <Link
                  to="/double"
                  className="border p-2 rounded hover:bg-white"
                >
                  Double Room
                </Link>
              </li>
              <li>
                <Link
                  to="/onebhk"
                  className="border p-2 rounded hover:bg-white"
                >
                  1BHK
                </Link>
              </li>
              <li>
                <Link
                  to="/twobhk"
                  className="border p-2 rounded hover:bg-white"
                >
                  2BHK
                </Link>
              </li>
              <li>
                <Link
                  to="/others"
                  className="border p-2 rounded hover:bg-white"
                >
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="hidden lg:flex items-center">
              <button>
                <Link
                  to="/userLogin"
                  className="p-3 rounded-md gap-2 m-2 bg-blue-600 font-bold text-white"
                >
                  <ion-icon
                    name="add-circle-outline"
                    style={{ fontSize: "1.5rem" }}
                  ></ion-icon>
                  Post Room
                </Link>
              </button>
            </div>
          </div>

          <div className="lg:hidden px-1 py-5" onClick={() => setOpen(!open)}>
            <div className="mx-1 sm:mx-2">
              <ion-icon
                name={open ? "close" : "menu"}
                style={{ fontSize: "2.5rem" }}
              ></ion-icon>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "absolute z-10 p-2 bg-white w-full h-200 px-4 border border-{2px} lg:hidden"
              : "hidden"
          }
          style={{ fontSize: "1rem" }}
        >
          <ul>
            <li className="p-2 hover:bg-red-600 text-[black]">
              <Link to="/home">Home</Link>
            </li>
            <li className="p-2 hover:bg-red-600 text-[black]">
              <Link to="/single">Single Room</Link>
            </li>
            <li className="p-2 hover:bg-red-600 text-[black]">
              <Link to="/double">Double Room</Link>
            </li>
            <li className="p-2 hover:bg-red-600 text-[black]">
              <Link to="/onebhk">1BHK</Link>
            </li>
            <li className="p-2 hover:bg-red-600 text-[black]">
              <Link to="/twobhk">2BHK</Link>
            </li>
            <li className="p-2 hover:bg-red-600 text-[black]">
              <Link to="/others">Other</Link>
            </li>

            <div className="flex flex-column items-center gap-2 my-2">
              <button>
                <Link
                  to="/userLogin"
                  className="p-3 rounded-md gap-2 m-2 bg-blue-600 font-bold text-white"
                >
                  <ion-icon
                    name="add-circle-outline"
                    style={{ fontSize: "1.5rem" }}
                  ></ion-icon>
                  Post Room
                </Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
      <CardNavigation />
    </div>
  );
};
export default NavBar1;

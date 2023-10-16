import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MainImage from "../../Assets/pic.jpg";
const Main = () => {
  return (
    <div className="w-full bg-green-300 py-4 px-10">
      <div className="md:max-w-[1480px] grid md:grid-cols-2 max-w-[600px] pt-20 mt-8 m-auto md:flex">
        <div className="flex flex-col justify-start">
          <p className="text-2xl text-black font-semibold my-2">
            Welcome to Kotha Bhada Nepal
          </p>
          <h1 className="md:text-5xl text-[red] text-5xl font-semibold">
            Sharing Happiness with Room Finding Solutions
          </h1>
          <p className="md:text-2xl text-xl text-black mt-3 px-4">
            Kotha Bhada Nepal is a website application designed to simplify the
            process of finding and renting rooms in Nepal.
          </p>
          <form className="max-w-[700px] p-4 shadow-lg rounded-md flex justify-between border my-4 m-[auto] md:w-[auto]">
            <input
              type="search"
              placeholder="Search"
              className="h-10 w-full md:w-4/5 px-3 rounded-lg font-bold placeholder cursor-text"
              style={{ textAlign: "center", lineHeight: "10px" }}
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon mx-2"
                style={{ color: "black" }}
              />
            </button>
          </form>
        </div>
        <img
          src={MainImage}
          className="md:order-2 order-first mx-auto md:mx-0 md:my-auto"
          style={{ width: "420px", height: "300px" }}
          alt="mainimg" // Increased height
        />
      </div>
    </div>
  );
};

export default Main;

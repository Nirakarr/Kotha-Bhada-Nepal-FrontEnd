import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoomFinders from "../../Assets/kotha bhada.jpg";
const AdminDashBoard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // const [showAddCards, setShowAddCards] = useState(false);

  const handleAddCardClick = () => {
    // Remove this line to prevent showing the AddCards component
    navigate("/addcard");
  };

  const handleRegisterClick = () => {
    // setShowAddCards(false);
    navigate("/registeradmin");
  };

  const handleDashBoard = () => {
    navigate("/viewallpost");
  };
  return (
    <div className="w-full">
      <div
        className="fixed top-0 left-0 w-full h-[80px] border-b bg-white shadow-md"
        style={{ zIndex: 1 }}
      >
        <div className="md-max-w-[1480px] h-full flex items-center justify-between px-2 mx-auto">
          <Link to="/">
            <img src={RoomFinders} className="w-[60px] ml-4" alt="Logo" />
          </Link>
          <div className="lg:flex gap-6 text-2xl">
            <button
              className="p-2 hover:bg-blue-600 text-white bg-red-500 border rounded"
              onClick={handleDashBoard}
            >
              DashBoard
            </button>
            <button
              className="p-2 hover:bg-blue-600 text-white bg-green-500 border rounded"
              onClick={handleAddCardClick}
            >
              Add New Post
            </button>
            <button
              className="p-2 hover:bg-green-800 text-white bg-blue-600 border rounded"
              onClick={handleRegisterClick}
            >
              Register Admin
            </button>
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
          className={`${
            open ? "block" : "hidden"
          } absolute z-10 p-2 bg-white w-full border-t lg:hidden`}
          style={{ fontSize: "1rem" }}
        >
          <div className="flex flex-column">
            <button
              className="p-2 hover:bg-red-600 text-white bg-blue-500 border rounded"
              onClick={handleDashBoard}
            >
              DashBoard
            </button>
            <button
              className="p-2 hover:bg-red-600 text-white bg-green-500 border rounded"
              onClick={handleAddCardClick}
            >
              Add New Post
            </button>
            <button
              className="p-2 hover:bg-blue-600 text-white bg-blue-500 border rounded"
              onClick={handleRegisterClick}
            >
              Register Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;

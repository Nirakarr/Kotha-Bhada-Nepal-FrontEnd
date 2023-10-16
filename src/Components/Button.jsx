import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="p-2 bg-indigo-800 text-white font-[Poppins] py-2 rounded md:ml-8 hover:bg-indigo-500 duration-500">
        {props.children}
      </button>
    </div>
  );
};

export default Button;

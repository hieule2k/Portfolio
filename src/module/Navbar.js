import React from "react";
const Navbar = () => {
  return (
    <div className="flex items-center justify-around w-full h-16 bg-black">
      <div className="text-2xl text-white transition-all duration-300 cursor-pointer font-logo hover:text-sky-300">
        H
      </div>
      <ul className="flex gap-4 text-textGray">
        <li className="relative cursor-pointer text-base mr-3 before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-white ">
          Home
        </li>
        <li className="relative cursor-pointer text-base mr-3 before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-white">
          About
        </li>
        <li className="relative cursor-pointer text-base mr-3 before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-white">
          Projects
        </li>
        <li className="relative cursor-pointer text-base mr-3 before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-white">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

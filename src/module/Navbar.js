import React, { useState } from "react";
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div
      className={`flex transition-all ease-in-out duration-300  ${
        burger ? "flex-col-reverse h-screen" : " h-16"
      }  items-center justify-around w-full  bg-black  `}
    >
      <div className="text-2xl text-white transition-all duration-300 cursor-pointer font-logo hover:text-[#ff781f]">
        H
      </div>

      <ul
        className={`flex transition-all ease-out duration-700 ${
          burger
            ? "translate-x-0 opacity-100"
            : " opacity-0 translate-x-full xl:opacity-100 xl:translate-x-0"
        } flex-col w-full gap-16 text-center text-textGray xl:flex-row xl:w-auto `}
      >
        <li className={` cursor-pointer  mr-3 `}>
          <a
            href="#home"
            onClick={() => {
              burger && handleBurger();
            }}
          >
            <span className="relative text-base before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-[#ff781f]">
              Home
            </span>
          </a>
        </li>
        <li className={` cursor-pointer  mr-3 `}>
          <a
            href="#about"
            onClick={() => {
              burger && handleBurger();
            }}
          >
            <span className="relative text-base before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-[#ff781f]">
              About
            </span>
          </a>
        </li>{" "}
        <li className={` cursor-pointer  mr-3 `}>
          <a
            href="#project"
            onClick={() => {
              burger && handleBurger();
            }}
          >
            <span className="relative text-base before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-[#ff781f]">
              Projects
            </span>
          </a>
        </li>{" "}
        <li className={` cursor-pointer  mr-3 `}>
          <span className="relative text-base before:transition-all before:duration-300 before:ease-in before:h-0.5 before:absolute before:bg-sky-300  before:w-0 before:bottom-0 hover:before:w-full hover:text-[#ff781f]">
            Contact
          </span>
        </li>
      </ul>
      <div
        onClick={handleBurger}
        className={`  mr-2 relative duration-700 transition-all ease-in-out cursor-pointer flex items-center w-6 h-4 before:transition-all before:ease-in-out before:duration-300 before:w-full before:top-0 before:h-[2px] before:bg-white  before:absolute ${
          burger
            ? " rotate-[720deg] before:rotate-45 before:top-[8px] after:top-[8px] after:-rotate-45 "
            : ""
        } after:absolute after:transition-all after:ease-in-out after:duration-300 after:w-full after:bottom-0 after:bg-white after:h-[2px] xl:hidden`}
      >
        <p
          className={`h-[2px] bg-white trasntion-all ease-in-out duration-300 ${
            burger ? "w-0" : "w-full"
          } `}
        ></p>
      </div>
    </div>
  );
};

export default Navbar;

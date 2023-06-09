import React from "react";

import GithubIcon from "../assets/icons/GithubIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import TailwindIcon from "../assets/icons/TailwindIcon";
import avatar from "../assets/images/HieuLe.JPG";
const DevProfile = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse items-center justify-around gap-2 mt-8 mb-24 xl:mt-16 xl:flex-row xl:gap-16"
    >
      <div className="flex flex-col justify-between text-center gap-y-2 xl:gap-8">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl font-bold">Front-End Develover</h1>
          <p className="opacity-40">
            Hi,Im Hieu. A passionate Front-End Developer from HaNoi,VietNam
          </p>
          <div className="flex justify-center gap-x-4 ">
            <GithubIcon customclass="cursor-pointer" />
            <FacebookIcon customclass="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <p className="relative hidden after:absolute after:right-[-10px] after:w-[1px] after:h-5 after:top-1/2 after:translate-y-[-50%] after:bg-black xl:block">
            Tech Stack
          </p>
          <ul className="inline-flex items-center justify-around flex-1">
            <li>
              <FontAwesomeIcon
                size="2xl"
                icon={faHtml5}
                style={{ color: "#e54c21" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                size="2xl"
                icon={faCss3Alt}
                style={{ color: "#294ed5" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                size="2xl"
                icon={faJs}
                style={{ color: "#f6d43f" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                size="2xl"
                icon={faReact}
                style={{ color: "#5ed3f3" }}
              />
            </li>
            <li>
              <TailwindIcon></TailwindIcon>
            </li>
            <li>
              <FontAwesomeIcon
                size="2xl"
                icon={faSass}
                style={{ color: "#c76494" }}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="w-52 h-52">
        <img
          src={avatar}
          alt="no"
          className="object-cover w-full h-full rounded-full animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default DevProfile;

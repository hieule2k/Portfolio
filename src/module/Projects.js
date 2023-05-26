import React from "react";

import pic from "../assets/images/schedule-table.png";
import CardLayout from "../layouts/CardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <CardLayout>
      <div id="project" className="flex-1">
        <div className="text-lg font-bold text-center xl:hidden">
          Schedule Table
        </div>
        <div className="relative w-full h-64 group">
          <img src={pic} alt="h" className="w-full h-full" />
          <div className="absolute bottom-0 w-full h-5 transition-all duration-500 ease-in-out opacity-0 group-hover:block group-hover:h-full group-hover:bg-black group-hover:opacity-80">
            <div className="flex justify-around w-full h-5 opacity-0 group-hover:opacity-100 absolute top-1/2 translate-y-[-50%]">
              <div className="flex items-center gap-2 text-orange-400 cursor-pointer">
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/hieule2k/schedule-table.git"
                  >
                    Code
                  </a>
                </span>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="flex items-center gap-2 text-orange-400 cursor-pointer ">
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://schedule-table-8lkropcej-hieulequang455-gmailcom.vercel.app/"
                  >
                    Live Demo
                  </a>
                </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden gap-3 xl:block">
        <h1 className="text-lg font-bold text-center">
          Booking Hotel
          <FontAwesomeIcon icon={faHotel} style={{ color: "#df1111" }} />
        </h1>
        <p className="text-center">
          A booking hotel website is an platform that allows users to book hotel
          for travelling.The website provides an interface for searching,
          booking ...
        </p>
        <div className="flex justify-around">
          <p>React</p>
          <p>Sass</p>
        </div>
        <div className="flex justify-around pt-2 ">
          <div className="flex items-center gap-2 transition-all duration-150 ease-in-out cursor-pointer hover:text-orange-400">
            <span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/hieule2k/schedule-table.git"
              >
                Code
              </a>
            </span>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="flex items-center gap-2 transition-all duration-150 ease-in-out cursor-pointer hover:text-orange-400 ">
            <span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://schedule-table-8lkropcej-hieulequang455-gmailcom.vercel.app/"
              >
                Live Demo
              </a>
            </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Projects;

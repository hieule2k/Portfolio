import React from "react";

import pic from "../assets/images/schedule-table.png";
import CardLayout from "../layouts/CardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ item }) => {
  return (
    <CardLayout>
      <div id="project" className="flex-1">
        <div className="text-lg font-bold text-center xl:hidden">
          {item.name}
        </div>
        <div className="relative w-full h-64 xl:h-full group">
          <img src={item.img} alt="h" className="w-full h-full" />
          <div className="absolute bottom-0 w-full h-5 transition-all duration-500 ease-in-out opacity-0 group-hover:block group-hover:h-full group-hover:bg-black group-hover:opacity-80">
            <div className="flex justify-around w-full h-5 opacity-0 group-hover:opacity-100 absolute top-1/2 translate-y-[-50%]">
              <div className="flex items-center gap-2 text-orange-400 cursor-pointer">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={item.linkGithub}
                  className="flex items-center gap-2"
                >
                  <span>Code</span>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-orange-400 cursor-pointer ">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={item.linkDemo}
                  className="flex items-center gap-2"
                >
                  <span>Live Demo</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden xl:flex xl:flex-col xl:gap-4">
        <h1 className="text-lg font-bold text-center">
          {item.name}
          <FontAwesomeIcon icon={faHotel} style={{ color: "#df1111" }} />
        </h1>
        <p className="text-center">{item.desc}</p>
        <p className="font-bold">Main Feature:</p>
        <ul className="list-disc">
          {item.mainFeature.map((i) => (
            <li className="ml-4">{i}</li>
          ))}
        </ul>
        <div className="flex justify-around gap-2">
          {item.tech.map((i) => (
            <span>{i}</span>
          ))}
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

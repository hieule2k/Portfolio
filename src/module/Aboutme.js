import React from "react";

import workspace from "../assets/images/workSpace2.jpg";
import frontEnd from "../assets/images/workSpace.jpg";
import CardLayout from "../layouts/CardLayout";
const Aboutme = () => {
  return (
    <CardLayout>
      <div className="relative flex-1 hidden h-64 w-80 xl:block">
        <img
          src={workspace}
          alt="not workwing"
          className="w-full h-full rounded-lg"
        />
        <img
          src={frontEnd}
          alt="cant"
          className="absolute bottom-[-20px] right-[-50px] rounded-full animate-spin-slow w-32 h-32"
        />
      </div>
      <div id="about" className="flex-1">
        <p className="mb-2 text-xl font-bold text-center text-textBlue">
          About Me
        </p>
        <p className="mb-2 text-lg font-bold text-center">
          A dedicated Front-End Developer
        </p>
        <p className="text-sm opacity-70">
          I'm Le Quang Hieu, a 22-year-old{" "}
          <span className="font-bold opacity-100 text-textHighlight">
            Front-end developer
          </span>
          . I'm a guy who likes making things with web technologies. I like to{" "}
          <span className="font-bold opacity-100 text-textHighlight">
            resolve
          </span>{" "}
          design problems,{" "}
          <span className="font-bold opacity-100 text-textHighlight">
            create
          </span>{" "}
          smart user interface and imagine useful interaction, developing rich{" "}
          <span className="font-bold opacity-100 text-textHighlight">
            web experiences & web applications
          </span>{" "}
          .Im also a{" "}
          <span className="font-bold opacity-100 text-textHighlight">
            team player
          </span>{" "}
          who thrives in collaborating with cross-functional teams to produce
          outstanding web applications
        </p>
      </div>
    </CardLayout>
  );
};

export default Aboutme;

import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full xl:flex xl:gap-24 xl:justify-center xl:items-center "
    >
      <div className="hidden xl:block xl:text-[200px] ">
        <FontAwesomeIcon icon={faHandPointRight} />
      </div>
      <div className="xl:flex xl:gap-4 xl:flex-col">
        <a href="https://www.facebook.com/profile.php?id=100005223543956">
          <div className="text-[32px] flex gap-2 items-center">
            <FontAwesomeIcon icon={faFacebook} />
            <div className="text-[24px]">hieuLe</div>
          </div>
        </a>
        <a href="https://github.com/hieule2k">
          <div className="text-[32px] flex gap-2 items-center">
            <FontAwesomeIcon icon={faGithub} />
            <div className="text-[24px]">hieule2k</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;

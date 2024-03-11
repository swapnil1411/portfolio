import React from "react";
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="container-fluid dark:bg-gray-900 ">
    <div className="flex justify-center gap-6 py-3 text-5xl text-teal-600 dark:text-gray-400">
    <AiFillGithub
      className="cursor-pointer  hover:text-teal-800"
      onClick={() => {
        window.location = "https://github.com/swapnil1411";
      }}
    />
    <AiFillLinkedin
      className="cursor-pointer  hover:text-teal-800"
      onClick={() => {
        window.location =
          "https://www.linkedin.com/in/swapnil-nanavati-181989199/";
      }}
    />

    <AiFillMail
      className="cursor-pointer  hover:text-teal-800"
      onClick={() => {
        window.open("mailto:swapnilnanavati12@gmail.com");
      }}
    />
  </div>

      <footer className="mt-8 py-4 border-t border-gray-300 text-center dark:border-gray-700 dark:text-white">
        <p className="text-sm">© 2024 Swapnil. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;

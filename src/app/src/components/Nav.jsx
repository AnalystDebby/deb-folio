import React from "react";
import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";

export const Nav = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-slate-300">
      <h1 className="text-xl font-burtons ">developedbydebby</h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsMoonStars
              className="cursor-pointer text-2xl "
              onClick={toggleDarkMode}
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
              onClick={toggleDarkMode}
            />
          )}
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500  to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

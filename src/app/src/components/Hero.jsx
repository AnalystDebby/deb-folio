import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/legacy/image";
import debby from "/public/dev-ed-wave.png";

export const Hero = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="text-center py-10 dark:text-slate-300">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
          Deborah Ihesiaba
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
        <p className="text-base py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
          Freelancer providing services for programming and whatever needs. Join
          me down below and lets get cracking.
        </p>
      </div>
      <div className="text-5xl  flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
        <Image
          src={debby}
          layout="fill"
          objectFit="cover"
          alt="animated picture"
        />
      </div>
    </div>
  );
};

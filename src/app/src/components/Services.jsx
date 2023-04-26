import React from "react";
import design from "/public/design.png";
import code from "/public/code.png";
import consulting from "/public/consulting.png";
import Image from "next/legacy/image";

export const Services = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-base py-2 leading-8 text-gray-800">
          Since the beginning of my job as a frontend developer, I have done
          remote work for <span className="text-teal-500"> agencies </span>
          consulted for
          <span className="text-teal-500"> startups </span>
          stand and collaborated with talented people to create digital for both
          business and consumer use.
        </p>
        <p className="text-base py-2 leading-8 text-gray-800">
          I offer from a wide range of services, including programming and
          teaching.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
          <Image src={design} alt="projects" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Git</p>
          <p className="text-gray-800 py-1">NextJS</p>
          <p className="text-gray-800 py-1">Javascript</p>
          <p className="text-gray-800 py-1">ReactJS</p>
          <p className="text-gray-800 py-1">SASS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
          <Image src={code} alt="projects" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Git</p>
          <p className="text-gray-800 py-1">NextJS</p>
          <p className="text-gray-800 py-1">Javascript</p>
          <p className="text-gray-800 py-1">ReactJS</p>
          <p className="text-gray-800 py-1">SASS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
          <Image src={consulting} alt="projects" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Git</p>
          <p className="text-gray-800 py-1">NextJS</p>
          <p className="text-gray-800 py-1">Javascript</p>
          <p className="text-gray-800 py-1">ReactJS</p>
          <p className="text-gray-800 py-1">SASS</p>
        </div>
      </div>
    </section>
  );
};

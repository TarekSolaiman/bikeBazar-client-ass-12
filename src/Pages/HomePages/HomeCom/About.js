import React from "react";
import biketore from "../../../assets/travel.jpg";

const About = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={biketore}
          alt=""
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md backdrop-filter backdrop-blur-lg bg-opacity-80 bg-accent">
          <div className="space-y-2 text-justify">
            <p className="inline-block text-2xl font-semibold sm:text-3xl">
              This is Best trusted bazar for bike sell and buy
            </p>
            <p className=" text-gray-200">
              Chose your bike for buy and Travel with bike . This make your bike
              ture expreanc morthen bettar and you love with your bike .
            </p>
          </div>
          <div className="text-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

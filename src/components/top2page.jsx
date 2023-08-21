import React from "react";
import { Link } from "react-router-dom";

const Top2Page = () => {
  return (
    <div className=" pb-4 border-b-4 border-x-custom-grey h-1/3">
      <Link
        to="/"
        className="w-screen h-1/6 bg-white flex items-center pl-9 my-4"
      >
        <img className="h-4" src="lefticon.svg" alt="" />
      </Link>
      <div className="pl-12 mt-1  flex flex-col space-y-5 ">
        <div className="flex space-x-4 items-center">
          <div className="text-4xl font-bold z-50">Mashala Mughlai</div>
          <div className="flex bg-custom-green h-6 rounded-lg items-center space-x-2 px-2 z-50">
            <div>4.2</div>
            <img className="w-4 h-4" src="star.svg" alt="" />
          </div>
        </div>
        <div className="z-50">
          <div className="text-custom-grey">
            Mughlai Masala is a style of cookery developed
          </div>
          <div className="text-custom-grey">in Indian Subcontinent by </div>
          <div className="text-custom-grey">
            by the imperial kitchen of Mughal Empire
          </div>
        </div>
      </div>
      <div className="pl-12 flex space-x-4 mt-5 items-center">
        <img className="w-6 h-6" src="time2.svg" alt="" />
        <div className="font-semibold text-lg">1 hour</div>
      </div>
    </div>
  );
};

export default Top2Page;

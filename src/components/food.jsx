import React from "react";
import { Link } from "react-router-dom";

const Food = ({ dishname, description, img, rating }) => {
  return (
    <div className="flex border-b-2 border-x-custom-grey justify-between py-3 space-x-3">
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-2 md:space-x-6 items-center">
          <div className="text-xl md:text-2xl">{dishname}</div>
          <img className="w-6 h-6" src="veg.svg" alt="" />
          <div className="flex bg-custom-green h-6 rounded-lg items-center space-x-2 px-2">
            <div>{rating}</div>
            <img className="w-4 h-4" src="star.svg" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="flex border-r-2 border-custom-orange space-x-1 md:space-x-3 pr-3">
            <div className="flex flex-col items-center">
              <img className="w-6 h-6" src="fridge.svg" alt="" />
              <div className="text-sm">Refrigerator</div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-6 h-6" src="fridge.svg" alt="" />
              <div className="text-sm">Refrigerator</div>
            </div>
          </div>
          <div className="pl-3">
            <div className="font-bold">Ingredients</div>
            <Link
              to="/ingridients"
              className="text-custom-orange flex space-x-2 justify-center"
            >
              View List
              <img src="orgarrow.svg" alt="" />
            </Link>
          </div>
        </div>
        <div>{description}</div>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-40 h-28 rounded-lg" src={img} alt="" />
        <div className="flex border  border-custom-orange bg-custom-bg-org rounded-lg relative bottom-3 w-20 sm:w-24 md:w-28 items-center justify-center">
          <div className="text-custom-orange">Add</div>
          <div className="absolute right-1 top-[-6px] text-custom-orange">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;

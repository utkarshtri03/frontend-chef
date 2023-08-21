import React from "react";

const TimeCal = () => {
  return (
    <div className="bg-white w-10/12 h-full rounded-lg shadow-xl flex items-center justify-around">
      <div className="flex border-r-2 w-1/2 space-x-1  sm:space-x-3 justify-center">
        <img src="date.svg" alt="" />
        <div className="text-sm sm:text-base font-bold">21 MAY 2021</div>
      </div>
      <div className="flex w-1/2 space-x-1 sm:space-x-3 justify-center">
        <img src="time.svg" alt="" />
        <div className="font-bold text-sm sm:text-base">10:30 Pm-12:30 Pm</div>
      </div>
    </div>
  );
};

export default TimeCal;

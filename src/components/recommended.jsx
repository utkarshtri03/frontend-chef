import React from "react";

const Recommended = () => {
  return (
    <div className="flex justify-between w-full h-1/4  items-center space-x-14">
      <div className="flex items-center justify-between space-x-6">
        <div className="font-bold text-custom-black text-2xl">Recommended</div>
        <div>
          <img src="dropdown.svg" alt="" />
        </div>
      </div>
      <button className="bg-black text-white font-semibold shadow-lg rounded-lg w-24 md:w-28 h-2/3">
        Menu
      </button>
    </div>
  );
};

export default Recommended;

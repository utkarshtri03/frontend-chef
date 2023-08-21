import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-24 bg-white flex items-center">
      <div className="flex items-center space-x-5 pl-7">
        <div>
          <img className="h-4" src="lefticon.svg" alt="" />
        </div>

        <div className="font-semibold text-2xl">Select Dishes</div>
      </div>
    </div>
  );
};

export default Navbar;

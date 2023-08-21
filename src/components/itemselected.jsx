import React from "react";

const Itemselected = () => {
  return (
    <div className="bg-black fixed bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 items-center justify-between w-64 md:w-80 h-14 py-2 px-3 md:px-6 text-white rounded-lg">
      <div className="flex space-x-2">
        <img src="burgericon.svg" alt="" className="mr-2" />
        <div className="sm:text-lg">3 food Items Selected</div>
      </div>
      <img src="white-arrow.svg" alt="" />
    </div>
  );
};

export default Itemselected;

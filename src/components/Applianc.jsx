import React from "react";

const Applianc = ({ name, image }) => {
  return (
    <div className="bg-custom-bg-grey w-24 h-32 flex flex-col justify-center items-center space-y-2 rounded-lg">
      <img className="w-10 h-16" src={image} alt="" />
      <div>{name}</div>
    </div>
  );
};

export default Applianc;

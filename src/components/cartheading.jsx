import React from "react";

const Cartheading = ({ head, count }) => {
  return (
    <div className="flex space-x-4 pt-4">
      <div className="flex space-x-2">
        <div className="font-bold text-xl">{head}</div>
        <div className="font-bold text-xl">{count}</div>
      </div>
      <img src="dropdown.svg" alt="" />
    </div>
  );
};

export default Cartheading;

import React from "react";

const Cartitems = ({ name, quantity }) => {
  return (
    <div className="flex justify-between pt-3">
      <div>{name}</div>
      <div>{quantity}</div>
    </div>
  );
};

export default Cartitems;

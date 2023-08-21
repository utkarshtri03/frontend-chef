import React, { useState, useEffect } from "react";
import Cartheading from "./cartheading";
import Cartitems from "./cartitems";
import axios from "axios";
import Applianc from "./Applianc";

const Bottom2page = () => {
  const [vegetable, setVegetable] = useState([]);
  const [spices, setSpices] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const API =
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1";

  const getApiData = async () => {
    const res = await axios.get(API);
    const dish = await res.data.ingredients;
    setVegetable(dish.vegetables);
    setSpices(dish.spices);
    setAppliances(dish.appliances);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="px-12">
      <div className="flex flex-col space-y-3 border-b-2 border-custom-grey pb-5 pt-5">
        <div className="font-bold text-2xl">Ingredients</div>
        <div className="text-sm text-custom-grey ">For 2 People</div>
      </div>
      <div>
        <Cartheading head="Vegetable" count="(05)" />
        <div>
          {vegetable.map((val) => {
            return (
              <div key={val.quantity}>
                <Cartitems name={val.name} quantity={val.quantity} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Cartheading head="Spices" count="(10)" />
        <div>
          {spices.map((val) => {
            return (
              <div key={val.quantity}>
                <Cartitems name={val.name} quantity={val.quantity} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl pt-4">Appliances</div>
        <div className="flex space-x-5 pt-4 pb-8">
          {appliances.map((val) => {
            return (
              <div key={val.name}>
                <Applianc name={val.name} image="fridge2.png" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bottom2page;

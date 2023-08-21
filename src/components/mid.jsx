import React, { useState, useEffect } from "react";
import Varities from "./varities";
import Biryani from "./Biryani";
import axios from "axios";

const Mid = () => {
  const [popDish, setpopDish] = useState([]);
  const API =
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";

  const getApiData = async () => {
    const res = await axios.get(API);
    const dish = await res.data.popularDishes;
    setpopDish(dish);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const customName = [
    "rounded-full",
    "border border-spacing-3 border-custom-orange rounded-full",
    "border border-spacing-3 border-custom-orange rounded-full",
    "border border-spacing-3 border-custom-orange rounded-full",
  ];

  return (
    <div className="bg-white pb-3 ">
      <div className="relative top-18">
        <div className="flex space-x-2 justify-around px-3 md:px-0">
          <Varities
            country="Italian"
            classname="border-custom-orange text-custom-orange bg-custom-bg-org border-2 rounded-2xl w-24 md:w-1/6 "
          />
          <Varities
            country="Indian"
            classname="border-custom-grey text-custom-grey bg-white border-2 rounded-2xl w-24  md:w-1/6 "
          />
          <Varities
            country="Indian"
            classname="border-custom-grey text-custom-grey bg-white  border-2 rounded-2xl w-24 md:w-1/6 "
          />
          <Varities
            country="Indian"
            classname="border-custom-grey text-custom-grey bg-white border-2 rounded-2xl w-24 md:w-1/6 "
          />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-14 mt-3">
          <div className="font-bold text-black text-3xl mb-2">
            Popular Dishes
          </div>
          <div className="flex overflow-scroll justify-between space-x-2">
            {popDish.map((val, index) => {
              return (
                <div key={val.id}>
                  <Biryani
                    classname={customName[index]}
                    name={val.name}
                    img={val.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;

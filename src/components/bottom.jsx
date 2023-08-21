import React, { useEffect, useState } from "react";
import Recommended from "./recommended";
import Food from "./food";
import axios from "axios";

const Bottom = () => {
  const [dishList, setDishList] = useState([]);

  const API =
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";

  const getApiData = async () => {
    const res = await axios.get(API);
    const dish = await res.data.dishes;
    setDishList(dish);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="bottom-container bg-white flex-grow overflow-scroll p-4 border-t-4 border-x-custom-grey px-10">
      <Recommended />
      {dishList.map((val) => {
        return (
          <div key={val.id}>
            <Food
              key={val.id}
              dishname={val.name}
              description={val.description}
              img={val.image}
              rating={val.rating}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Bottom;

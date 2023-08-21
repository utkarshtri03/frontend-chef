import React from "react";
import Top2Page from "./top2page";
import Bottom2page from "./bottom2page";

const SecondPage = () => {
  return (
    <div className="overflow-hidden relative">
      <Top2Page />
      <Bottom2page />
      <div className="absolute z-20 rounded-full bg-custom-pink w-60 h-60 top-10 right-[-14px]"></div>
      <img
        className="absolute top-24 z-40 w-60 h-60 right-[-110px] "
        src="spice1.png"
        alt=""
      />
      <img
        className="absolute top-36 w-96 h-40  z-30 right-[-130px]"
        src="veggy1.png"
        alt=""
      />
    </div>
  );
};

export default SecondPage;

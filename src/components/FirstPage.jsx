import React from "react";
import Blackbg from "./Blackbg";
import Navbar from "./Navbar";
import Bottom from "./bottom";
import Itemselected from "./itemselected";
import Mid from "./mid";
import TimeCal from "./timecal";

const FirstPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <Blackbg />
      <div className="relative bottom-8 w-full h-1/6 flex justify-center">
        <TimeCal />
      </div>
      <Mid />
      <Bottom />
      <Itemselected />
    </div>
  );
};

export default FirstPage;

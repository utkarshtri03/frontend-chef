import React from "react";

const Biryani = ({ name, img, classname }) => {
  const bgImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={classname}>
      <div
        className="flex justify-center items-center rounded-full w-36 h-36 m-1 font-semibold text-white"
        style={bgImageStyle}
      >
        {name}
      </div>
    </div>
  );
};

export default Biryani;

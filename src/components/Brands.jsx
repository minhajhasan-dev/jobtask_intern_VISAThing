import React from "react";
import logo1 from "../images/Brands/1.png";
import logo2 from "../images/Brands/2.png";
import logo3 from "../images/Brands/3.png";
import logo4 from "../images/Brands/4.png";
import logo5 from "../images/Brands/5.png";
import logo6 from "../images/Brands/6.png";
import arrow from "../images/icons/Arrow1.png";

const Brands = () => {
  return (
    <div className="py-20 container mx-auto">
      <p className="flex items-center space-x-2 text-base-content">
        <span>Feature in Trusted by</span> <img src={arrow} alt="" />
      </p>
      <div className="flex justify-between flex-wrap items-center mt-4">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
    </div>
  );
};

export default Brands;

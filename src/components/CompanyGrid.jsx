import React from "react";
import image1 from "../images/Grid/1.png";
import image2 from "../images/Grid/2.png";
import image3 from "../images/Grid/3.png";
import image4 from "../images/Grid/4.png";

const CompanyGrid = () => {
  return (
    <div className="py-[100px] container mx-auto">
      {/* create a grid of 4 column 2 rows */}
      <div className="grid grid-cols-4 gap-4">
        {/* grid item */}
        <div className="flex w-full h-[345px] bg-[#F3F7FB] justify-center items-center rounded-xl p-4 ">
          <img src={image1} alt="company" className="w-full" />
        </div>
        {/* grid item */}
        <div className="flex flex-col justify-between  bg-[#fff] rounded-xl p-4">
          <div className="text-gray-500">
            <p>New Investors</p>
            <p>Last month</p>
          </div>
          <div className="text-[80px] font-bold">
            <p>3,964</p>
          </div>
        </div>
        {/* grid item */}
        <div className="flex justify-center items-center bg-[#F3F7FB] rounded-xl p-4 w-full h-[345px]">
          <img src={image2} alt="company" className="w-full" />
        </div>
        {/* grid item */}
        <div className="flex flex-col justify-between  bg-[#7CE4A1] rounded-xl p-4">
          <div className="text-gray-500">
            <p>New Investors</p>
            <p>Last month</p>
          </div>
          <div className="text-[80px] font-bold">
            <p>3,964</p>
          </div>
        </div>
        {/* grid item */}
        <div className="flex flex-col justify-between  bg-[#7CE4A1] rounded-xl p-4">
          <div className="text-gray-500">
            <p>New Investors</p>
            <p>Last month</p>
          </div>
          <div className="text-[80px] font-bold">
            <p>3,964</p>
          </div>
        </div>
        {/* grid item */}
        <div className="flex justify-center items-center bg-[#F3F7FB] rounded-xl p-4 w-full h-[345px]">
          <img src={image3} alt="company" className="w-full" />
        </div>
        {/* grid item */}
        <div className="flex flex-col justify-between  bg-[#fff] rounded-xl p-4">
          <div className="text-gray-500">
            <p>New Investors</p>
            <p>Last month</p>
          </div>
          <div className="text-[80px] font-bold">
            <p>3,964</p>
          </div>
        </div>
        {/* grid item */}
        <div className="flex justify-center items-center bg-[#F3F7FB] rounded-xl p-4 w-full h-[345px]">
          <img src={image4} alt="company" />
        </div>
      </div>
    </div>
  );
};

export default CompanyGrid;

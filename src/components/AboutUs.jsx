import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import icon1 from "../images/About/1.png";
import icon2 from "../images/About/2.png";
import icon3 from "../images/About/3.png";
import icon4 from "../images/About/4.png";
import image from "../images/About/image.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto flex">
      <div className="bg-[#FFF] w-[100%] flex flex-col justify-center py-28 px-10 rounded-lg space-y-5">
        <p className="text-xl text-[#21763F] font-normal ">About Us</p>
        <h1 className="text-[42px] font-semibold text-[#111322] ">
          Aspired To Build A Better Financial World
        </h1>
        <p className="text-balance text-gray-600 mt-5">
          Raqamyah is a Sharia-compliant crowdlending platform licensed by the
          Saudi Central Bank (SAMA). It connects SMEs seeking financing with
          investors looking for competitive returns. By directly funding SMEs,
          investors earn profits while supporting business growth and economic
          development. The platform’s mission is to simplify and accelerate
          funding for small businesses to help them thrive.
        </p>
        <ul className="space-y-4 text-gray-600 mt-5">
          <li className="flex items-center gap-1">
            <RiRadioButtonFill className="text-[#37C368]" />
            Sharia-Compliant Crowdlending
          </li>
          <li className="flex items-center gap-1">
            <RiRadioButtonFill className="text-[#37C368]" /> Empowering Business
            Growth
          </li>
          <li className="flex items-center gap-1">
            <RiRadioButtonFill className="text-[#37C368]" /> Direct Investment
            Opportunities
          </li>
          <li className="flex items-center gap-1">
            <RiRadioButtonFill className="text-[#37C368]" /> Regulated and
            Trusted
          </li>
        </ul>
      </div>
      {/* right side content */}
      <div className=" px-10 w-[100%] rounded-lg space-y-5">
        {/* image container div */}
        <div className="bg-[#FFF]  rounded-lg p-5">
          <img src={image} className="w-full rounded-lg" alt="about us" />
        </div>
        {/* feature div */}
        <div className="bg-[#FFF] grid grid-cols-2  rounded-lg gap-5 p-5">
          {/* 1 */}
          <div className="bg-[#F9F9FB] flex rounded-lg flex-col items-center p-5 gap-5">
            {/* circle shape */}
            <div className="w-20 h-20  bg-[#C3F2D3] rounded-full flex items-center justify-center">
              <img src={icon1} alt="icon" />
            </div>
            <p className="font-semibold font-medium">Lower Rates</p>
          </div>
          {/* 2 */}
          <div className="bg-[#F9F9FB] rounded-lg flex flex-col items-center p-5 gap-5">
            {/* circle shape */}
            <div className="w-20 h-20 bg-[#C3F2D3] rounded-full flex items-center justify-center">
              <img src={icon2} alt="icon" />
            </div>
            <p className="font-semibold font-medium">
              Financing up to SAR 7.5M
            </p>
          </div>
          {/* 3 */}
          <div className="bg-[#F9F9FB] rounded-lg flex flex-col items-center p-5 gap-5">
            {/* circle shape */}
            <div className="w-20 h-20 bg-[#C3F2D3] rounded-full flex items-center justify-center">
              <img src={icon3} alt="icon" />
            </div>
            <p className="font-semibold font-medium">Faster Decision</p>
          </div>
          {/* 4 */}
          <div className="bg-[#F9F9FB] rounded-lg flex flex-col items-center p-5 gap-5">
            {/* circle shape */}
            <div className="w-20 h-20 bg-[#C3F2D3] rounded-full flex items-center justify-center">
              <img src={icon4} alt="icon" />
            </div>
            <p className="font-semibold font-medium">Shari'a Compliant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

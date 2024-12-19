import React from "react";
import { FaPlay } from "react-icons/fa";
import compass from "../images/HowItWorks/compass.png";
import invest from "../images/HowItWorks/invest.png";
import receive_returns from "../images/HowItWorks/receive_returns.png";
import track_progress from "../images/HowItWorks/track_progress.png";
import logo_small from "../images/Logo/logo_small.png";

const HowItWorks = () => {
  return (
    <div className="container mx-auto">
      {/* how it works div text */}
      <div className="bg-[#fff] p-5 rounded-xl">
        <p className="text-[#21763F] text-lg">How it Works</p>
        <h1 className="font-semibold text-gray-900 text-[42px]">Our Process</h1>
        <h1 className="font-semibold text-gray-900 text-[42px]">
          for Investors
        </h1>
        <h1 className="font-semibold text-gray-900 text-[42px]">
          and Businesses
        </h1>
      </div>
      {/* for investors and for business */}
      <div className="mt-5 flex gap-5">
        {/* for investors */}
        <div className="p-4 w-1/2 bg-[#fff] text-gray-900 font-medium rounded-xl">
          <p>For Investors</p>
          <div className="w-full my-3 flex justify-center">
            <div className="p-2 py-5 border border-gray-200 rounded-xl w-16 ">
              <img src={logo_small} alt="" />
            </div>
          </div>
          {/* features */}
          <div className="flex  flex-col gap-4">
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={compass} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Explore Opportunities
                </p>
                <p className="text-sm text-gray-500">
                  Browse verified businesses seeking investment.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={invest} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">Invest</p>
                <p className="text-sm text-gray-500">
                  Choose and invest in a business that fits your goals.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={track_progress} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Track Progress
                </p>
                <p className="text-sm text-gray-500">
                  Monitor your investment’s performance on our platform.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={receive_returns} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Receive Returns
                </p>
                <p className="text-sm text-gray-500">
                  Get monthly repayments and profits directly.
                </p>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex gap-4 justify-end">
            <button className="btn bg-[#005397] hover:bg-[#005397] font-medium  text-white rounded-3xl mt-4">
              Start Investing
            </button>
            <button className="btn btn-outline font-medium hover:bg-[#005397] rounded-3xl mt-4">
              <FaPlay className="text-[#005397]" />
              Tutorial
            </button>
          </div>
        </div>
        {/* for business */}
        <div className="p-4 w-1/2 bg-[#fff] text-gray-900 font-medium rounded-xl">
          <p>For Businesses</p>
          <div className="w-full my-3 flex justify-center">
            <div className="p-2 py-5 border border-gray-200 rounded-xl w-16 ">
              <img src={logo_small} alt="" />
            </div>
          </div>
          {/* features */}
          <div className="flex  flex-col gap-4">
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={compass} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Explore Opportunities
                </p>
                <p className="text-sm text-gray-500">
                  Browse verified businesses seeking investment.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={invest} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">Invest</p>
                <p className="text-sm text-gray-500">
                  Choose and invest in a business that fits your goals.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={track_progress} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Track Progress
                </p>
                <p className="text-sm text-gray-500">
                  Monitor your investment’s performance on our platform.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 border items-center rounded-2xl">
              {/* icon div */}
              <div className="p-3 bg-[#ECFBF1] w-14 h-14 rounded-xl flex justify-center items-center">
                <img src={receive_returns} alt="" />
              </div>
              {/* content div */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Receive Returns
                </p>
                <p className="text-sm text-gray-500">
                  Get monthly repayments and profits directly.
                </p>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex gap-4 justify-end">
            <button className="btn bg-[#005397] hover:bg-[#005397] font-medium  text-white rounded-3xl mt-4">
              Get Funded
            </button>
            <button className="btn btn-outline font-medium hover:bg-[#005397] rounded-3xl mt-4">
              <FaPlay className="text-[#005397]" />
              Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

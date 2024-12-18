import React from "react";
import { SiTrustpilot } from "react-icons/si";
import arabic_word from "../images/Hero/arabic_word.png";
import invest_finance from "../images/Hero/invest_finance.png";
import saudi_bank from "../images/Hero/saudi_center_bank_certified.png";
import sheikh from "../images/Hero/sheikh.jpeg";
import trusted_by_investors from "../images/Hero/trusted_by_investors.png";

const Hero = () => {
  return (
    <div>
      <div className="flex w-full gap-8 justify-between">
        {/* part-1 */}
        {/* image grid */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col gap-4 justify-center items-center max-w-72">
              <img src={saudi_bank} alt="hero" className="w-full" />
              <img src={trusted_by_investors} alt="hero" className="w-full" />
            </div>
            {/* ----- */}
            <div className="flex flex-col gap-4 justify-center items-center max-w-72">
              <img src={sheikh} alt="hero" className="rounded-3xl w-full" />
              <img src={invest_finance} alt="hero" className="w-full" />
            </div>
          </div>
        </div>
        {/* part-2 */}
        {/* right side content */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="flex gap-4 w-[21rem] bg-[#00233F] text-white p-3 rounded-3xl">
            <img src={arabic_word} alt="" className="w-6" />
            <p className="text-base">Islamic Finance, Shari’a Approved</p>
          </div>
          <h1 className="text-4xl mt-4">Smart Investments for Verified SMEs</h1>
          <p>
            Smart Investments for Verified SMEs connects investors with vetted
            small businesses, promoting informed decisions and local economic
            growth
          </p>
          {/* button div */}
          <div>
            <button className="btn bg-[#005397] text-white rounded-3xl mt-4">
              Start Investing
            </button>
            <button className="btn bg-[#005397] text-white rounded-3xl mt-4">
              Get Funded
            </button>
          </div>
          {/* reviews */}
          <p className="flex gap-1 mt-4">
            See our <span className="font-bold underline">2,000 reviews</span>{" "}
            on
            <span className="flex gap-1 items-center">
              <SiTrustpilot />
              Trustpilot
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

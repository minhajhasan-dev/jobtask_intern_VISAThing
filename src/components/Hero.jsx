import React from "react";
import { SiTrustpilot } from "react-icons/si";
import arabic_word from "../images/Hero/arabic_word.png";
import invest_finance from "../images/Hero/invest_finance.png";
import saudi_bank from "../images/Hero/saudi_center_bank_certified.png";
import sheikh from "../images/Hero/sheikh.jpeg";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  w-full gap-8 justify-between">
        {/* part-1 */}
        {/* image grid */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col gap-4 justify-center items-center max-w-72">
              <img src={saudi_bank} alt="hero" className="w-full" />

              {/* avatar group div */}
              <div className="w-full text-xs font-medium rounded-2xl p-3 flex gap-1 bg-[#F3F7FB] shadow-2xl justify-center items-center">
                {/* avatar group starts here */}
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                {/* avatar group end here */}
                <p>Trusted by 15k+ investors</p>
              </div>
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
          <h1 className="text-7xl font-semibold mt-4">
            Smart Investments for Verified SMEs
          </h1>
          <p className="mt-4 text-balance">
            Smart Investments for Verified SMEs connects investors with vetted
            small businesses, promoting informed decisions and local economic
            growth
          </p>
          {/* button div */}
          <div className="flex gap-4">
            <button className="btn bg-[#005397] hover:bg-[#005397] font-medium  text-white rounded-3xl mt-4">
              Start Investing
            </button>
            <button className="btn btn-outline font-medium hover:bg-[#005397] rounded-3xl mt-4">
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

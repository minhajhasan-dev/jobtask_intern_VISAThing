import React from "react";
import { SiTrustpilot } from "react-icons/si";

const Testimonial = () => {
  return (
    <div className="bg-[#005397] py-[100px] text-white ">
      <div className="mx-auto container">
        {/* pre carousel div */}
        <div className="flex justify-between">
          {/* left content  */}
          <div className="w-1/2">
            <p className="text-xl text-[#7CE4A1] font-normal">Testimonial</p>
            <h1 className="text-[42px] font-semibold text-[#fff]">
              For nearly 07 years, people have chosen VISAThing!
            </h1>
          </div>
          {/* right content */}
          <div className="w-1/2 flex justify-end">
            {/* reviews */}
            <div>
              <p className="flex gap-1 mt-4">
                See our{" "}
                <span className="font-bold underline">2,000 reviews</span> on
                <span className="flex gap-1 items-center">
                  <SiTrustpilot />
                  Trustpilot
                </span>
              </p>
              {/* carousel control button */}
              <div>
                {/* demo button here. update it */}
                <button className="btn btn-primary">Hi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

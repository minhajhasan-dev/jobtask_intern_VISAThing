import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import Carousel from "./Carousel/Carousel";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#005397] py-[100px] text-white ">
      <div className="mx-auto container">
        {/* pre carousel div */}
        <div className="flex justify-between items-center">
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
              <div className="flex gap-8 mt-4">
                <button
                  ref={prevRef}
                  className="btn p-4 rounded-xl bg-[#fff] text-[#005397]"
                >
                  <FaArrowLeft />
                </button>
                <button
                  ref={nextRef}
                  className="btn p-4 rounded-xl bg-[#fff] text-[#005397]"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* carousel div*/}
        <div className="flex gap-4 mt-14">
          <Carousel prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

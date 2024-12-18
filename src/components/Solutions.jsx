import React from "react";
import image from "../images/solutions/image.png";

const Solutions = () => {
  return (
    <div className="container mt-24 mx-auto">
      {/* main container */}
      <div className="flex gap-x-32">
        {/* image container */}
        <div className="flex justify-center items-center bg-gray-100 rounded-lg  w-1/2">
          <img src={image} alt="solutions" className="w-full p-5" />
        </div>
        {/* text faq container */}
        <div className="mt-10">
          <p className="text-xl text-[#21763F] font-normal ">Solutions</p>
          <h1 className="text-[42px] font-semibold text-[#111322] ">
            Our Finance Solutions
          </h1>
          <hr className="mt-5" />
          <div className="collapse">
            <input type="radio" name="my-accordion-1 " defaultChecked />
            <div className="collapse-title text-xl  text-[#005397] font-semibold text-[24px] mt-5">
              Business Expansion
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mt-2">
                {" "}
                Scale your business by adding new products, service or open new
                branch
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="collapse">
            <input type="radio" name="my-accordion-1 " defaultChecked />
            <div className="collapse-title text-xl  text-[#005397] font-semibold text-[24px] mt-5">
              Upgrade Your Premises
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mt-2">
                {" "}
                Renovate your current office or move to a new location with a
                Raqamyah loan for business premises
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="collapse">
            <input type="radio" name="my-accordion-1 " defaultChecked />
            <div className="collapse-title text-xl  text-[#005397] font-semibold text-[24px] mt-5">
              Marketing
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mt-2">
                {" "}
                Invest in marketing and advertising to attract new customers and
                grow your business
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="collapse">
            <input type="radio" name="my-accordion-1 " defaultChecked />
            <div className="collapse-title text-xl  text-[#005397] font-semibold text-[24px] mt-5">
              Purchase Equipment
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mt-2">
                {" "}
                Buy new equipment to increase productivity and efficiency
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="collapse">
            <input type="radio" name="my-accordion-1 " defaultChecked />
            <div className="collapse-title text-xl  text-[#005397] font-semibold text-[24px] mt-5">
              Increase Inventory
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mt-2">
                {" "}
                Stock up on inventory to meet demand and grow your business
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="collapse">
            <input type="radio" name="my-accordion-1 " defaultChecked />
            <div className="collapse-title text-xl  text-[#005397] font-semibold text-[24px] mt-5">
              Invoice Financing
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mt-2">
                {" "}
                Get paid faster by using your unpaid invoices to secure a loan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

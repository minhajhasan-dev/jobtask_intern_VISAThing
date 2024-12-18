import React from "react";

const Navbar = () => {
  const Links = [
    <>
      <li>
        <a href="#" className="navbar-link">
          Home
        </a>
      </li>
      <li>
        <a href="#for_business" className="navbar-link">
          For Business
        </a>
      </li>
      <li>
        <a href="#for_investors" className="navbar-link">
          For Investors
        </a>
      </li>
      <li>
        <a href="#financing_rates" className="navbar-link">
          Financing Rates
        </a>
      </li>
      <li className="dropdown">
        <a href="#" className="navbar-link">
          Others
        </a>
      </li>
    </>,
  ];

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          {/* logo */}
          <img src="./logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a href="#" className="navbar-link text-[#005397]">
            Login
          </a>
          <a className="btn hover:bg-[#005397] rounded-3xl bg-[#005397] text-white">
            Apply Now
          </a>
        </div>
      </div>
      <hr className="mb-8" />
    </div>
  );
};

export default Navbar;

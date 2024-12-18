import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div>
        <p>About Us</p>
        <h1>Aspired To Build A Better Financial World</h1>
        <p className="text-balance">
          Raqamyah is a Sharia-compliant crowdlending platform licensed by the
          Saudi Central Bank (SAMA). It connects SMEs seeking financing with
          investors looking for competitive returns. By directly funding SMEs,
          investors earn profits while supporting business growth and economic
          development. The platform’s mission is to simplify and accelerate
          funding for small businesses to help them thrive.
        </p>
        <ul>
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
    </div>
  );
};

export default AboutUs;

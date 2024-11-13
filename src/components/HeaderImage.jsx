import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderImage = ({ img, title, subTitle }) => {
  return (
    <div className=" relative ">
      {/* Image */}
      <img src={img} alt="about" className="w-full h-auto" />
      {/* Text on top of the image */}
      <div className="absolute inset-0 px-28 flex items-center justify-between">
        <h1 className="text-white text-3xl md:text-6xl font-bold">
          {title}
          <p className="text-white text-xs md:text-lg font-thin mt-6">
            <NavLink to="/">
              <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
            </NavLink>{" "}
            / {title} {subTitle}
          </p>
        </h1>
      </div>
    </div>
  );
};

HeaderImage.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
};

export default HeaderImage;

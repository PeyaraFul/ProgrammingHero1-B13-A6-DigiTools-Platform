import React from "react";
import Dotstatus from "../../products/dot-status.png";
import BannerImg from "../../banner.png";
import PlayIcon from "../../Play.png";

const Banner = () => {
  const textGradientColor =
    "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] bg-clip-text text-transparent";
  const bgGradientColor = "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6]";
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-30 my-15">
        <div className=" p-4">
          <div className="bg-purple-200 w-80 rounded-full box-border">
            <span
            className={`flex p-2  ${textGradientColor}`}
          >
            <img className="w-7 mx-2" src={Dotstatus} alt="a dot status icon" />
            New: AI-Powered Tools Available
          </span>
          </div>

          <h1 className="sm:text-4xl md:text-4xl lg:text-6xl font-semibold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="p-4">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br /> software—all in one place. Start creating faster today.
            Explore Products
          </p>
          <button className={`btn ${bgGradientColor} rounded-full text-white `}>Explore Products</button>
          <button className={`btn border-2 border-purple-500 ml-4 `}> <img src={PlayIcon} alt="" /> Watch Demo</button>
        </div>

        <div className="">
          <img className="w-100%" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

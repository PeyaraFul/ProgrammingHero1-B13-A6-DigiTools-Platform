import React from "react";
import PackageImg from "../../package.png";
const ChoseProduct = () => {
  return (
    <div>
      <div className=" bg-gray-100 rounded-2xl shadow-lg p-6">
        <span className="text-center rounded-full w-8 h-8 bg-purple-400 block ml-auto ">
          2
        </span>
        <img
          className="mx-auto bg-purple-100 rounded-full p-3"
          src={PackageImg}
          alt=""
        />
        <h3 className="font-semibold text-center text-md ">Choose Products</h3>
        <p className="text-center">
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>
    </div>
  );
};

export default ChoseProduct;

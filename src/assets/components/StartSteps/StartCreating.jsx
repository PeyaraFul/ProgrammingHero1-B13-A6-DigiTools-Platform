import React from "react";
import RocketImg from "../../rocket.png";

const StartCreating = () => {
  return (
    <div>
      <div className=" bg-gray-100 rounded-2xl shadow-lg p-6">
        <span className="text-center rounded-full w-8 h-8 bg-purple-400 block ml-auto ">
          3
        </span>
        <img
          className="mx-auto bg-purple-100 rounded-full p-3"
          src={RocketImg}
          alt=""
        />
        <h3 className="font-semibold text-center text-md ">Start Creating</h3>
        <p className="text-center">
          Download and start using your premium tools immediately.
        </p>
      </div>
    </div>
  );
};

export default StartCreating;

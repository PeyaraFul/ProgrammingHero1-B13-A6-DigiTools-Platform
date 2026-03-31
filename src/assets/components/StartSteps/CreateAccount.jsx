import React from "react";
import userImg from "../../user.png";

const CreateAccount = () => {
  return (
    <div>
      <div className=" bg-gray-100 rounded-2xl shadow-lg p-6">
        <span className="text-center rounded-full w-8 h-8 bg-purple-400 block ml-auto ">
          1
        </span>
        <img
          className="mx-auto bg-purple-100 rounded-full p-3"
          src={userImg}
          alt=""
        />
        <h3 className="font-semibold text-center text-md ">Create Account</h3>
        <p className="text-center">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;

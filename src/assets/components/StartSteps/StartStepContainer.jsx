import React from "react";
import CreateAccount from "./CreateAccount";
import ChoseProduct from "./ChoseProduct";
import StartCreating from "./StartCreating";

const StartStepContainer = () => {
  return (
    <>
      <div className="m-30">
        <h1 className="text-center font-bold text-3xl">
          Get Started in 3 Steps
          </h1>
          <p className="text-center">Start using premium digital tools in minutes, not hours.</p>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          <CreateAccount></CreateAccount>
          <ChoseProduct></ChoseProduct>
          <StartCreating></StartCreating>
        </div>
      </div>
    </>
  );
};

export default StartStepContainer;

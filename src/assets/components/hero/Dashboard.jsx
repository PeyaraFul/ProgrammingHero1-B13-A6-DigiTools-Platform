import React from "react";

const Dashboard = () => {
   const bgGradientColor = "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6]";
  return (
    <div>
      <div className={`flex w-full flex-col mx-auto lg:flex-row lg:w-full ${bgGradientColor} text-white `}>
        <div className="card rounded-box flex flex-col justify-center items-center h-32 grow ">
          <h2 className="font-semibold text-3xl"> 50k</h2>
          <p>Active users</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box flex flex-col justify-center items-center h-32 grow">
          <h2 className="font-semibold text-3xl"> 200+</h2>
          <p>Premium tools</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box flex flex-col justify-center items-center h-32 grow">
          <h2 className="font-semibold text-3xl"> 4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

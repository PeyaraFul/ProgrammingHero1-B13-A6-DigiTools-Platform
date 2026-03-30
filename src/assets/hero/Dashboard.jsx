import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center ">
          <h2 className="font-semibold text-3xl"> 50k</h2>
          <p>Active users</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
          <h2 className="font-semibold text-3xl"> 200+</h2>
          <p>Premium tools</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
          <h2 className="font-semibold text-3xl"> 4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

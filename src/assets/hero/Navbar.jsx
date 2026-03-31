import React from "react";
import CartIcon from "../products/shopping-cart.png";

const Navbar = () => {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">

        <div className=" w-full flex justify-around">
          <div className="">
            <span className="font-bold text-2xl">DigiTools</span>
          </div>

          <div className="my-2">
            <button className="cursor-pointer flex gap-4" > {navLinks.map((navLink) => (<p key={navLinks.indexOf(navLink)}>{navLink}</p>))}</button>
          </div>

          <div className="flex gap-4">
           
              <button className="cursor-pointer">
                <div className=" flex">
                  <img src={CartIcon} alt="shopping-cart-icon" />
                  <span className=" -mx-0.7 -my-3 text-red-500 ">0</span>
                </div>
             
              </button>
              <button className="cursor-pointer"> Login</button>
            
              <button className="btn btn-primary">Get Stared</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

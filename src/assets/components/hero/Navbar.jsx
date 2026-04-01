import React from "react";
import CartIcon from "../../products/shopping-cart.png";


const Navbar = ({carts}) => {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];
  const textGradientColor = 'bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] bg-clip-text text-transparent' ;
  const bgGradientColor = 'bg-gradient-to-r from-[#9514fa]  to-[#4f39f6]' ;

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0">

        <div className=" w-full flex justify-around">
          <div className="">
            <span className={`font-bold text-2xl ${textGradientColor}`}>DigiTools</span>
          </div>

          <div className="my-2 sm:block hidden">
            <button className="cursor-pointer flex gap-4" > {navLinks.map((navLink) => (<p key={navLinks.indexOf(navLink)}>{navLink}</p>))}</button>
          </div>

          <div className="flex gap-4">
           
              <button className="cursor-pointer">
                <div className=" flex">
                  <img src={CartIcon} alt="shopping-cart-icon" />
                  <span className=" -mx-0.7 -my-3 text-red-500 "> {carts.length}</span>
                </div>
             
              </button>
              <button className="cursor-pointer"> Login</button>
            
        <button className={`btn
           ${bgGradientColor} rounded-full text-white`}>Get Stared</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

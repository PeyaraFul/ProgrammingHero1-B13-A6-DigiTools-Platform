import React from "react";
import { toast } from "react-toastify";
import CartIcon from "../products/cart-Img.png";

const Cart = ({ carts, setCarts }) => {
  const btnStyle =
    "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] rounded-full text-white";
  const totalAmount = carts.reduce((sum, item) => sum + item.price, 0);
  // console.log(carts)

  const eraseCart = () => {
    setCarts([]);
    toast.success("Succeed!");
  };

  const handleRemove = (cart) => {
    const filterItem = carts.filter((i) => i.id !== cart.id);
    setCarts(filterItem);
    toast.warning("Removed the item!");
  };

  return (
    <>
      {carts.length === 0 ? (
        <div className="h-60 rounded-2xl flex flex-col justify-center items-center gap-1 mx-30 my-6 bg-gray-100">
          <img src={CartIcon} alt="cart icon" className="mx-auto w-30" />
          <h1 className=" text-md font-bold text-gray-400">
            {" "}
            Your card is empty{" "}
          </h1>
        </div>
      ) : (
        <div className="my-10 mx-6 md:mx-30 bg-gray-100 p-4 rounded-2xl">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="p-4 shadow rounded flex gap-3 justify-between"
            >
              <div className=" flex gap-3 justify-start">
                <img src={cart.icon} alt="" className="w-12 h-12" />
                <div>
                  <h2 className="font-semibold text-xl">{cart.name}</h2>
                  <p>${cart.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(cart)}
                className="btn btn-outline "
              >
                {" "}
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between p-4 ">
            <p>Total:</p>
            <span className="font-semibold text-xl">
              ${totalAmount.toFixed(2)}{" "}
            </span>
          </div>

          <button
            onClick={eraseCart}
            className={`btn ${btnStyle} w-full`}
            >
            
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;

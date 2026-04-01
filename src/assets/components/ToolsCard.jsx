import { useState } from "react";

import CheckIcon from "../products/check-solid.png";
import { toast } from "react-toastify";

const ToolsCard = ({product,carts, setCarts}) => {
  const btnStyle = "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] rounded-full text-white"
  const [isBuyNow, setIsBuyNow] = useState(false);
  // console.log(product);

  const handleIsBuyNow = () => {
    setIsBuyNow(true) ;
    const exitsItem = carts.find( item => item.id === product.id )
    if(exitsItem){
      toast.error('Already added the item!')
      return ;
    }

    setCarts([...carts, product, ]) ;
    toast.success('Added to cart successfully!')
  }


  return (
    <div key={product.id} className="">
      <div key={product.id} className="grid -col shadow-lg p-4 rounded-2xl relative">
        <div className="badge badge-soft badge-primary absolute top-4 right-4">
          {product.tagType}
        </div>

        <div className="bg-amber-0 w-12 h-12">
          <img src={product.icon} alt="" />
        </div>

        <h1 className="font-bold text-xl my-1 mt-8">{product.name}</h1>
        <p>{product.description}</p>
        <p className="font-semibold text-3xl my-1">
          {product.price}
          <span className="font-normal text-sm">/{product.period}</span>
        </p>

        <div className="my-1">
          {product?.features?.map((feature, index) => (
            <p key={index} className="my-0.5 flex gap-1">
              <img src={CheckIcon} alt="CheckIcon" className="w-5" />
              {feature}
            </p>
          ))}
        </div>

        <button onClick={handleIsBuyNow} className={`btn ${btnStyle} w-full mt-auto`}>
          {isBuyNow ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;

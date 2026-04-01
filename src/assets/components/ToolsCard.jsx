import { useState } from "react";

import CheckIcon from "../products/check-solid.png";
import { toast } from "react-toastify";

const ToolsCard = ({product,carts, setCarts}) => {
  const btnStyle = "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] rounded-full text-white";
  const [isBuyNow, setIsBuyNow] = useState(false);
  // console.log(product);

  const handleIsBuyNow = () => {
    const exitsItem = carts.find( item => item.id === product.id )
    setIsBuyNow(true) ;
    
    if(exitsItem){
      toast.error('Already added the item!')
      return ;
    }

    setCarts([...carts, product, ]) ;
    toast.success('Added to cart successfully!')
  }
  // console.log(product.tagType)
  let badgeStyle = '' ; 
  if(product.tag === 'popular'){
    badgeStyle= 'bg-purple-100 text-purple-600';
  }
  if(product.tag === "best seller"){
    badgeStyle = 'bg-amber-100 text-red-500';
  }
  if(product.tag === 'new'){
    badgeStyle = 'bg-green-100 text-green-500';
  }



  return (
    <div key={product.id} className="">
      <div key={product.id} className="grid bg-purple-50 z-10 shadow-lg p-4 rounded-2xl relative">
        <div className={`badge badge-soft absolute top-4 right-4 ${badgeStyle} `}>
          {product.tag}
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

        <button onClick={handleIsBuyNow} className={`btn ${btnStyle} w-full mt-auto z-20`}>
          {isBuyNow ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;

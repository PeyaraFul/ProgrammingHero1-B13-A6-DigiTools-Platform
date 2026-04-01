
import { use } from "react";
import ToolsCard from './ToolsCard';


const PremiumTools = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);
//   console.log(products);
  


  return (
    
    <div>
      <div className="m-40 mt-10">
        <h1 className="font-semibold text-4xl text-center">
          Premium Digital Tools
        </h1>
        <p className="text-center mb-8">
          Choose from our curated collection of premium digital <br /> products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
            // <h1 key={product.id}> {product.id} </h1>



            

    <ToolsCard carts={carts} setCarts={setCarts}  key={product.id} product={product}></ToolsCard>
          // <ToolsCard product={product}></ToolsCard>
        ))}
      </div>
    </div>
  );
};

export default PremiumTools;

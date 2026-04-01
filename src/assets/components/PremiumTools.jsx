
import { use } from "react";
import ToolsCard from './ToolsCard';


const PremiumTools = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);
//   console.log(products);
  


  return (
    
    <div>
      

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-30 my-4 ">
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

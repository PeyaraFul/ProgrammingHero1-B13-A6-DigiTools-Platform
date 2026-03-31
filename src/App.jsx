import "./App.css";
import { useState } from "react";
import Banner from "./assets/hero/Banner";
import Dashboard from "./assets/hero/Dashboard";
import Navbar from "./assets/hero/Navbar";

import PremiumTools from "./assets/components/PremiumTools";
import Cart from "./assets/components/Cart";


const loadProducts = async () => {
  const response = await fetch("/product.json");
  const data = await response.json();
  return data;
  // console.log(data);
  // data.map(products => {
  //     console.log(products.name);
  // });
};

const productPromise = loadProducts();

function App() {
let [activeTab, setActiveTab] = useState('products') ;
const [carts, setCarts] = useState([]) ;
// console.log(carts) ;


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Dashboard></Dashboard>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center mt-20">
        <input
          type="radio"
          name="products-tab"
          className="tab w-30"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab('products')}
        />
        <input
          type="radio"
          name="cart-tab"
          className="tab w-30"
          aria-label="Cart"
          onClick={() => setActiveTab('cart')}
          
        />
      </div>

      {activeTab=== 'products' ? <PremiumTools carts={carts} setCarts={setCarts}  productPromise={productPromise} ></PremiumTools> : null}
      {activeTab === 'cart' ? <Cart carts={carts}></Cart> : null}

     
    </>
  );
}

export default App;

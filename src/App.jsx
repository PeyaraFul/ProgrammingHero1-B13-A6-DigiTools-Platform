import "./App.css";
import { Suspense, useState } from "react";
import Banner from "./assets/hero/Banner";
import Dashboard from "./assets/hero/Dashboard";
import Navbar from "./assets/hero/Navbar";
import PremiumTools from "./assets/components/PremiumTools";
import Cart from "./assets/components/Cart";
import StartStepContainer from "./assets/components/StartSteps/StartStepContainer";
import Plan from "./assets/components/transparentPricing/plan";
import FooterContainer from "./assets/components/footer/FooterContainer";

//product json file loading
const loadProducts = async () => {
  const response = await fetch("/product.json");
  const data = await response.json();
  return data;
  
};
const productPromise = loadProducts();

// plan json file loading
const loadPlan = async () => {
  const planResponse = await fetch("/plan.json") ;
  const planData = await planResponse.json() ;
  return planData ;
  // console.log(planData) ;
};
const planPromise = loadPlan() ;




function App() {
let [activeTab, setActiveTab] = useState('products') ;
const [carts, setCarts] = useState([]) ;
// console.log(carts.length) ;


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
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab('cart')}
          
        />
      </div>

      <Suspense>
        {activeTab=== 'products' ? <PremiumTools carts={carts} setCarts={setCarts}  productPromise={productPromise} ></PremiumTools> : null}
      </Suspense>

      {activeTab === 'cart' ? <Cart carts={carts} setCarts={setCarts} ></Cart> : null}

     <StartStepContainer></StartStepContainer>

      <Suspense fallback={<h1>LOADING...</h1>} ><Plan planPromise={planPromise} > </Plan></Suspense>

      <FooterContainer></FooterContainer>


    </>
  );
}

export default App;

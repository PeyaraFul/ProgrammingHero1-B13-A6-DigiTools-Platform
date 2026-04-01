import "./App.css";
import { Suspense, useState } from "react";
import Navbar from "./assets/components/hero/Navbar";
import Banner from "./assets/components/hero/Banner";
import Dashboard from './assets/components/hero/Dashboard' ;
import PremiumTools from "./assets/components/PremiumTools";
import Cart from "./assets/components/Cart";
import StartStepContainer from "./assets/components/StartSteps/StartStepContainer";
import Plan from "./assets/components/transparentPricing/plan";
import FooterContainer from "./assets/components/footer/FooterContainer";
import PremiumHeading from "./assets/components/PremiumHeading";


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


const btnStyle = "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] rounded-full text-white"
// console.log(carts.length) ;


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Dashboard></Dashboard>
      
      <PremiumHeading></PremiumHeading>


      <div className="tabs tabs-box justify-center gap-4 -mt-25">
        <input
          type="radio"
          name="products-tab"
          className={`tab w-30 ${btnStyle} `}
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab('products')}
        />
        <input
          type="radio"
          name="cart-tab"
          className={`tab w-30 ${btnStyle}`}
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

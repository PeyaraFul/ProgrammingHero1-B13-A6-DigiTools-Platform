import "./App.css";
import Banner from "./assets/hero/Banner";
import Dashboard from "./assets/hero/Dashboard";
import Navbar from "./assets/hero/Navbar";
import PremiumTools from "./assets/tools/PremiumTools";






 const loadProducts = async () => {
    const response = await fetch('/product.json');
    const data = await response.json();
    return data ;
    // console.log(data);
    // data.map(products => {
    //     console.log(products.name);
    // });
};

const productPromise = loadProducts();



function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Dashboard></Dashboard>
      <PremiumTools productPromise={productPromise}></PremiumTools>


    </>
  );
}

export default App;

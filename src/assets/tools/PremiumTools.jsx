import React from 'react';
// import product from '../../../public/product.json';
import { use } from 'react';
import CheckIcon from '../products/check-solid.png' ;







const PremiumTools = ({productPromise}) => {


    const products = use(productPromise)
    console.log(products) ;






    return (
        <>
         <div className='m-40'>
            <h1 className='font-semibold text-4xl text-center'>Pemium Dizital Tools</h1>
            <p className='text-center'>Choose from our curated collection of premium digital <br /> products designed to boost your productivity and creativity.</p>


        
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
            <input type="radio" name="my_tabs_6" className="tab ml-auto" aria-label="Tab 1" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6 grid grid-cols-3 gap-4">


               {products.map(product => <div className='shadow-lg p-4 rounded-2xl relative' >

                <div className="badge badge-soft badge-primary absolute top-4 right-4 "> {product.tagType} </div>

                <div className='bg-amber-50 w-10 h-10'> {product.icon} </div>

                <h1 className='font-semibold text-3xl my-1 mt-8'> {product.name}</h1>
                <p> {product.description} </p>
                <p className='font-semibold text-3xl my-1'> {product.price}<span className='font-normal text-sm'>/{product.period} </span> </p>
                <p className='my-1'> {product.features.map(features => <p className='my-0.5 flex gap-1'> <img src={CheckIcon} alt="CheckIcon" className='w-5'/>{features} </p>)} </p>
                
                <button className="btn btn-primary"> Buy Now</button>
                 </div>
               )}






            </div>




            <input type="radio" name="my_tabs_6" className="tab mr-auto" aria-label="Tab 2"  />
            <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

            
            </div>







            </div>   
        </>
    );
};

export default PremiumTools;
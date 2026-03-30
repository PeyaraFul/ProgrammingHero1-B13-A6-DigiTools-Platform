import React from 'react';
import Dotstatus from '../products/dot-status.png' ;
import BannerImg from '../banner.png'; 
const Banner = () => {
    return (
        <div>
            <div className='flex gap-8 mx-30 my-15'>
                <div className='bg-amber-100 p-4'>
                    <p className='flex bg-[#e1e7ff] p-2 rounded-full w-68'> <img className='w-5' src={Dotstatus} alt="a dot status icon" />New: AI-Powered Tools Available</p>
                    <h1 className='text-7xl font-semibold'>Supercharge Your Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. Explore Products</p>
                    <button className="btn btn-primary">Explore Products</button>
                    <button className="btn btn-primary ml-4">Watch Demo</button>
                </div>

                <div className='bg-amber-200'> 
                    <img className='w-100%' src={BannerImg} alt="" />
                </div>
               
            </div>
            
            
        </div>
    );
};

export default Banner;
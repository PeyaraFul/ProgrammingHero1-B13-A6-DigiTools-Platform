import React from 'react';
import Instagram from './icon/instagram.png'; 
import facebook from './icon/facebook.png'; 
import x from './icon/x-twitter.png'; 
const LInks = () => {
    return (
        <div>
            <h4> Social Links </h4>
            <div className='flex gap-4'>
            <img src={Instagram} alt="instagram icon" className='w-8 h-8' />
            <img src={facebook} alt="facebook icon" className='w-8 h-8'/>
            <img src={x} alt="x-twit icon" className='w-8 h-8'/>
            </div>

        </div>
    );
};

export default LInks;
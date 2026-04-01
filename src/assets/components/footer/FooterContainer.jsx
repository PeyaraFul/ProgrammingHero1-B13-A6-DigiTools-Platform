import React from 'react';
import DigiTools from './DigiTools';
import Product from './Product';
import Company from './Company';
import Resources from './Resources';
import LInks from './LInks';

const FooterContainer = () => {
    return (
        <div>
            <div className='flex gap-10 text-white justify-center text-sm bg-gray-700 p-10 mt-6'>
                <DigiTools></DigiTools>
                <Product></Product>
                <Company></Company>
                <Resources></Resources>
                <LInks></LInks>
                  
                
            </div>
            <div className="divider -my-4 mx-30"></div>
            <div className='flex justify-around text-white bg-gray-700 p-10 text-sm'>
                    <div>© 2026 Digitools. All rights reserved.</div>
                    <div className='flex gap-4'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>
        </div>
    );
};

export default FooterContainer;
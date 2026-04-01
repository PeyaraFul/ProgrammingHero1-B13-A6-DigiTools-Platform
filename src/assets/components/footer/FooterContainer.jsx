import React from 'react';
import DigiTools from './DigiTools';
import Product from './Product';
import Company from './Company';
import Resources from './Resources';
import LInks from './LInks';

const FooterContainer = () => {
    return (
        <div>
            <div className='flex gap-10 text-white justify-center bg-gray-700 p-6'>
                <DigiTools></DigiTools>
                <Product></Product>
                <Company></Company>
                <Resources></Resources>
                <LInks></LInks>
            </div>
        </div>
    );
};

export default FooterContainer;
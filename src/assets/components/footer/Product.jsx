import React from 'react';

const Product = () => {
    const products = ['Features', 'Pricing', 'Templates', 'Integration' ] ;

    return (
        <div>
            <h3 className='font-bold'>Products</h3>
            {products.map(product => <ul className='my-3'> {product} </ul>)}
        </div>
    );
};

export default Product;
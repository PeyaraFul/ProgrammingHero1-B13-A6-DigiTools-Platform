import React from 'react';

const Company = () => {
    const company = [ 'About', 'Blog', 'Careers', 'Press' ]
    return (
        <div>
            <h3 className='font-bold'>Company</h3>
            {company.map(comp => <ul className='my-3'> {comp} </ul>)}
        </div>
    );
};

export default Company

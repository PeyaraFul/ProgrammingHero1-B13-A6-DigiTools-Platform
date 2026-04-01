import React from 'react';



const Resources = () => {
    const resources = [ 'Documentation', 'Help Center', 'Community', 'Contact' ]
    return (
        <div>
            <h3 className='font-bold'>Resources</h3>
           {resources.map(resource => <ul className='my-3'> {resource} </ul>)}
       
        </div>
    );
};

export default Resources;
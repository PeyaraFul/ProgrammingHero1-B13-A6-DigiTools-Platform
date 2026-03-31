import React from 'react';


const Cart = ({carts}) => {

    console.log(carts)
    return (
        <div>
            <div className='h-60 w-full'>
                <h1> cat</h1>
                {carts.map(cart => (
                    <div key={cart.id} className="p-4 shadow rounded flex gap-3 justify-between">
                  <div className=" flex gap-3 justify-start">
                    <img src={cart.icon} alt="" className="w-12 h-12" />
                    <div>
                      <h2 className="font-semibold text-xl">{cart.name}</h2>
                    <p>
                    ${cart.price}
                    </p>
                    </div>
                    
                  </div>
                  <button onClick={() => handleRemove(cart.id)} class="btn btn-outline btn-secondary"> Remove</button>
                  
                </div>
                ) )}
            </div>
         
        </div>
    );
};

export default Cart;
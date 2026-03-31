import React from 'react';
import { toast } from 'react-toastify';


const Cart = ({carts, setCarts}) => {
 const totalAmount = carts.reduce((sum, item) =>  sum + item.price, 0) ;
    // console.log(carts)

    const eraseCart = () => {
        setCarts([]) ;
          toast.success('Succeed!')
    }

    const handleRemove = (cart) => { 
        const filterItem = carts.filter(i => i.id !== cart.id)
        setCarts(filterItem) ;
        toast.warning('Removed the item!')
    }


    return (
        <div>


            {
                carts.length === 0 ? <h1> Your card is Empty 
                    
                </h1>
                :
                <div className='h-60 w-full'>
                
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
                  <button onClick={() => handleRemove(cart)} className="btn btn-outline btn-secondary"> Remove</button>
                  
                    </div>

                ) )}
                <div className='flex justify-between p-4 '>
                    <p>Total:</p>
                    <span className='font-semibold text-xl'>${totalAmount.toFixed(2)} </span>
                </div>

                 <button onClick={eraseCart} className="btn btn-primary w-19/20 block mx-auto"> Proceed to Checkout  </button>
            </div>
            }
            
         
        </div>
    );
};

export default Cart;
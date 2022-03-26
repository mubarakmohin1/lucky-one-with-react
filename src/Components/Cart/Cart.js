import React from 'react';
 import './Cart.css'



const Cart = ({cart}) => {
 
   
    return (
        <div>
            <h3>order summary</h3>
            {
        cart.map(item => <p key={item.id}> {item.name}</p>)
            }
            
        </div>
    );
};

export default Cart;
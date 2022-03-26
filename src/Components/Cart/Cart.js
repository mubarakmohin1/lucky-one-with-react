import React from 'react';
 import './Cart.css'



const Cart = ({cart}) => {

    const clearAllItem = () =>{
        
    }
   
    return (
        <div>
            <h3>order summary</h3>
            {
        cart.map(item => <p key={item.id}> {item.name}</p>)
            }
            <div>
                <button className='Chose-btn'>Choose one</button> <br />
                <button className='Clear-btn' onClick={()=>clearAllItem()}>New cart</button>
            </div>
        </div>
    );
};

export default Cart;
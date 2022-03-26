import React, { useEffect, useState } from 'react';
import ProductDetails from '../prodDetails/ProductDetails';
// import {chosehandle} from '../Cart/Cart'
import Cart from '../Cart/Cart'
import './Component.css'

const Component = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    
    useEffect(() => {
        fetch('data.json').then(res =>res.json()).then(data =>setProducts(data));
        },[])


        const orderHandleClick = (product) =>{
            const newCart = [...cart,product];
            setCart(newCart);
     }
    //  const chosehandle = ()=>{
        //   setCart([])
    //  }
        
    return (
        <div className='book-container'>
            
            <div className="show-container">
                 
                {
                     products.map(product => <ProductDetails key ={product.id} product={product} orderHandleClick={orderHandleClick}></ProductDetails>)
                }

            </div>
            <div className="order-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Component;
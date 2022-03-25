import React, { useEffect, useState } from 'react';
import ProductDetails from '../prodDetails/ProductDetails';
import './Component.css'

const Component = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('data.json').then(res =>res.json()).then(data =>setProducts(data));
        },[])


        const orderHandleClick = (product) =>{
            console.log(product);
            const newCart = [...cart,product];
            setCart(newCart);
     }
        
    return (
        <div className='book-container'>
            
            <div className="show-container">
                 
                {
                     products.map(product => <ProductDetails key ={product.id} product={product} orderHandleClick={orderHandleClick}></ProductDetails>)
                }

            </div>
            <div className="order-container">
                <h3>order summary</h3>
                <p>Added cart: {cart.length}</p>
            </div>
        </div>
    );
};

export default Component;
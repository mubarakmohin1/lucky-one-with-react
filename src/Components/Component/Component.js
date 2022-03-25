import React, { useEffect, useState } from 'react';
import ProductDetails from '../prodDetails/ProductDetails';
import './Component.css'

const Component = () => {
    const [products,setproducts] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res =>res.json()).then(data =>setproducts(data));
        },[])
    return (
        <div className='book-container'>
            
            <div className="show-container">
                 
                {
                     products.map(product => <ProductDetails key ={product.id} product={product}></ProductDetails>)
                }

            </div>
            <div className="order-container">
                <h3>order summary</h3>
            </div>
        </div>
    );
};

export default Component;
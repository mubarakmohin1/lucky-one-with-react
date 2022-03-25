import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({product}) => {
    const {picture,price,name} = product;
    return (
        <div className='product-body'>
          <img src={picture} alt="" />  
          <div>
              <b>Name: {name}</b>
              <p>Price: {price}</p>
          </div>
          <button className='btn-class'>Add To Cart</button>
        </div>
    );
};

export default ProductDetails;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ProductDetails.css'

const ProductDetails = ({product,orderHandleClick}) => {
    const {picture,price,name} = product;

    
   
    return (
        <div className='product-body'>
          <img src={picture} alt="" />  
          <div className='product-info'>
              <b>Name: {name}</b>
              <p>Price: {price}</p>
          </div>
          <button className='btn-class' onClick={()=>orderHandleClick(product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default ProductDetails;
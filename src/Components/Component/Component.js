import React, { useEffect, useState } from 'react';
import ProductDetails from '../prodDetails/ProductDetails';
 
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
    
     const chooseHandle =()=>{
       
     for(const element of cart){
         const myArray = [element.name];
         const random = Math.floor(Math.random()* myArray.length)
        alert(myArray[random])
        }
         
         }
      
      
    return (
        <div className='book-container'>
            
            <div className="show-container">
                 
                {
                     products.map(product => <ProductDetails key ={product.id} product={product} orderHandleClick={orderHandleClick}></ProductDetails>)
                }

            </div>
            <div className="order-container">
               <Cart cart={cart}></Cart>
               <div>
                <button className='Chose-btn' onClick={()=>chooseHandle()}>Choose one</button> <br />
                <button className='Clear-btn' key={cart.id} onClick={() => setCart([])}>New cart</button>
            </div>
            </div>
        </div>
    );
};

export default Component;
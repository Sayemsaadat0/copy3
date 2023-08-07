import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/Cart/CartSlice';

const ProductCards = ({product}) => { 
    const{picture,balance,name, quantity} = product 
    const dispatch = useDispatch()
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
           <img src={picture} alt="" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>money is honey : {balance}</p> 
                <p>Quantity : {quantity}</p> 

                <button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline'>add to cart</button>
                <button className='btn btn-outline'>Delete from cart</button>
            </div>
        </div>
    );
};

export default ProductCards;
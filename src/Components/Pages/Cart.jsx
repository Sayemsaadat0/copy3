import React from 'react';
import Container from '../Layout/Container';
import { useSelector } from 'react-redux';
import ProductCards from '../ProductCards';

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    return (
        <Container>
            <div className='mx-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cart.map((product, index) => <ProductCards product={product} key={index}></ProductCards>)
                }
            </div>
        </Container>
    );
};

export default Cart;
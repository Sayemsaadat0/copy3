// import React, { useEffect } from 'react';
import { useEffect, useState } from 'react';
import Container from '../Layout/Container';
import ProductCards from '../ProductCards';


const Home = () => { 
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("Product.json")
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <Container>
            <h1 className='text-center'>Sk Shariful Islam</h1>
            <div className='mx-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map((product,index)=><ProductCards product={product} key={index}></ProductCards>)
                }
            </div>
        </Container>
    );
};

export default Home;
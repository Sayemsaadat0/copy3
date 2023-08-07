import React from 'react';
import Container from '../Container';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
    return (
        <Container>
            <div className="navbar bg-indigo-200 rounded-full flex justify-between">
                <div className="">
                    <h2 className='text-2xl font-bold'>Navbar</h2>
                </div>
               
                <div className="form-control">
                    <div className="input-group ">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal flex justify-between gap-2 px-1">
                        <NavLink to='/' className="btn rounded-full text-xl font-semibold">Home</NavLink>
                        <NavLink to='/toprated' className="text-xl btn rounded-full font-semibold">Top Rated</NavLink>
                        <NavLink to='/about' className="text-xl font-semibold btn rounded-full">About</NavLink>
                        <NavLink to='/cart' className="btn rounded-full text-xl font-semibold flex justify-between items-center mr-5 ">
                            <FaShoppingCart className="text-xl"></FaShoppingCart></NavLink>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
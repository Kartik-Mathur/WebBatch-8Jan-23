import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <NavLink className='navlinks' to="/home">Home</NavLink>
                <NavLink className='navlinks' to="/about">About</NavLink>
                <NavLink className='navlinks' to="/contact">Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar
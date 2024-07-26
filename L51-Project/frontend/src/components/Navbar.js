import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Styles from './Navbar.module.css';

const Navbar = () => {
    const userData = useSelector(state=>state.userReducer);
    return (
        <div className={Styles['navbar']}>
            {!userData.isLoggedIn && <NavLink to="/login">Login</NavLink>}
            {!userData.isLoggedIn && <NavLink to="/signup">Signup</NavLink>}
            {userData.isLoggedIn && <NavLink to="/app">Home</NavLink>}
            {userData.isLoggedIn && <NavLink to="/cart">Cart</NavLink>}
            {userData.isLoggedIn && <NavLink to="/history">History</NavLink>}
            {userData.isLoggedIn && <NavLink to="/logout">Logout</NavLink>}
        </div>
    )
}

export default Navbar;

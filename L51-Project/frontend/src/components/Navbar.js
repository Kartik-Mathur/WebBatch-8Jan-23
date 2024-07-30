import React from 'react'
import { NavLink } from 'react-router-dom';
import Styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';

const Navbar = () => {
    const userData = useSelector(state => state.userReducer);
    return (
        <div className={Styles['navbar']}>
            {!userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/login">Login</NavLink>}
            {!userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/signup">Signup</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/app">Home</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/cart">Cart</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/history">History</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/logout">Logout</NavLink>}
            {userData.isLoggedIn && <ProfileImage imageUrl={userData.image} />}
        </div>
    )
}

export default Navbar;

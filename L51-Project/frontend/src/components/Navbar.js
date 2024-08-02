import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Styles from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';
import axios from '../utils/axios';

const Navbar = () => {
    const userData = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = async () => {
            try {
                const { data } = await axios.get('/getuser');
                if (data.user) {
                    console.log("DATA ", data.user);
                    // SET THE DATA TO REDUX
                    dispatch({ type: 'SET_USER', payload: data.user })
                    // NAVIGATE TO HOME PAGE
                    navigate('/app');
                }
            } catch (error) {
                alert(error.response.data.message)
            }
        }
        isLoggedIn();
    }, []);
    return (
        <div className={Styles['navbar']}>
            {!userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/login">Login</NavLink>}
            {!userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/signup">Signup</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/app">Home</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/cart"><span className='cart-heading'>Cart<span className='cart-number'>{userData?.cart?.length}</span></span></NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/history">History</NavLink>}
            {userData.isLoggedIn && <NavLink className={Styles['nav-item']} to="/logout">Logout</NavLink>}
            {userData.isLoggedIn && <ProfileImage imageUrl={userData.image} />}
        </div>
    )
}

export default Navbar;

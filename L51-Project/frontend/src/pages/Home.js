import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../utils/axios';
import AllRestaurants from '../components/Restaurants/AllRestaurants';
import MySpinner from '../components/Spinner';
import LandingPage from './LandingPage';
import { Outlet } from 'react-router-dom';

const Home = () => {
    const userData = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [isRestaurantsFetched, setIsRestaurantsFetched] = useState(false);
    useEffect(() => {
        async function getRestaurantDetails() {

            try {
                let { data } = await axios.get('/restaurant/all');
                dispatch({ type: "SET_RESTAURANTS", payload: data.restaurants });
                setIsRestaurantsFetched(true);
            } catch (error) {
                alert(error);
            }
        }

        getRestaurantDetails();
    }, []);

    return (
        <>
            {
                userData.isLoggedIn && <div>
                    {!isRestaurantsFetched && <MySpinner />}
                    {isRestaurantsFetched && <AllRestaurants />}
                    <Outlet />
                </div>
            }

            {!userData.isLoggedIn && <LandingPage />}


        </>
    )
}

export default Home

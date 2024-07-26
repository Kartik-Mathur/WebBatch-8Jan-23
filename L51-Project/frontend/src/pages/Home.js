import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from '../utils/axios';

const Home = () => {
    const userData = useSelector(state => state.userReducer);
    useEffect(() => {
        async function getRestaurantDetails(){
            // let {data} = await axios.get('/restaurant/all');

        }

        getRestaurantDetails();
    }, []);

    return (
        <div>
            <div>{userData.name}</div>
            <div>{userData.email}</div>
            <div>{userData.username}</div>
            <img src={userData.image} />
        </div>
    )
}

export default Home

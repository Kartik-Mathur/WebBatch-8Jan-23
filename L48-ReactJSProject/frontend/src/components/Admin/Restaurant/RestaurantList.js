import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';

const BASE_URL = 'http://localhost:4444';

const fetchRestaurants = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let {data} = await axios.get(BASE_URL+'/admin/restaurants');
            resolve(data);
        } catch (err) {
            reject(err);
        }
    })
}

const RestaurantList = () => {
    const [restaurants,setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants()
            .then((data) => {
                // console.log(data)
                setRestaurants(data.restaurant);
            })
            .catch(err => {
                alert(err.message);
            })
    }, []);

    return (
        <>
            <h1>Restaurant List</h1>
            {restaurants.map((r)=>{
                return <RestaurantCard key={r._id} restaurant={r} />
            })}
        </>
    )
}

export default RestaurantList
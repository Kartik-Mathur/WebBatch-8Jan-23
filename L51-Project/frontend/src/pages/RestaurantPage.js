import React from 'react'
import { useParams } from 'react-router-dom';

const RestaurantPage = () => {
    const { restaurant_id } = useParams();
    console.log(restaurant_id);
    console.log("Hello")
    return (
        <div>
            I am a single restaurant
        </div>
    )
}

export default RestaurantPage;

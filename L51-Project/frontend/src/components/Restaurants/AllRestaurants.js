import React from 'react'
import { useSelector } from 'react-redux'
import Restaurant from './Restaurant';

const AllRestaurants = () => {
    const restaurantsData = useSelector(state => state.restaurantReducer);
    return (
        <div className='restaurants-list'>
            {restaurantsData.map((restaurant, index) => <Restaurant key={index} restaurant={restaurant} />)}
        </div>
    )
}

export default AllRestaurants

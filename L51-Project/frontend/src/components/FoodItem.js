import React from 'react'
import axios from "../utils/axios";

const FoodItem = ({ food, category, restaurantName }) => {
    console.log(food);
    const addToCartHandler = (id, category, restaurantName) => {
        try {
            async function addToCart() {
                const { data } = await axios.get(`/restaurant/add-cart/${id}?category=${category}&restaurant_name=${restaurantName}`)
                console.log(data);
            }
            addToCart();
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className='food-item-container'>
            <div className='food-item-image'>
                <img src={food?.images[0]?.url} alt="food-item-image" />
            </div>
            <div className='food-item-details'>
                <div className='food-item-name'>{food.name}</div>
                <div className='food-item-price'>{food.price}</div>
                <div className='food-item-description'>{food.description}</div>
                <button className='add-to-cart-btn'
                    onClick={() => addToCartHandler(food._id, category, restaurantName)}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default FoodItem

const mongoose = require('mongoose');
const { Schema } = mongoose;

// image, name, location, rating, food: []
const restaurantSchema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: [{ userId: String, userName: String, value: Number }],
    cuisineCategory: [
        {
            cuisineName: String,
            foodList: [
                {
                    name: String,
                    price: Number,
                    description: String,
                    image: String,
                }
            ]
        }
    ]
});
// image, price, name, restaurant_id, cuisineName, description

module.exports = mongoose.model('restaurants', restaurantSchema);
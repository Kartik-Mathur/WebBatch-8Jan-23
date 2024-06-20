const Restaurant = require('../models/restaurant');

module.exports.postAddRestaurant = async (req, res, next) => {
    const { name, image, location } = req.body;
    try {
        let newRestaurant = await Restaurant.create({
            name,
            image,
            location,
        })
        res.status(200).json({
            message: 'Restaurant added successfully',
            newRestaurant
        });
    } catch (err) {
        res.status(400).json({ message: "Not able to add restaurant currently" });
    }
}

module.exports.getRestaurants = async (req, res, next) => {
    
    try {
        let restaurantsList = await Restaurant.find();
        res.status(200).json({
            message: 'Restaurant fetched successfully',
            restaurant: restaurantsList
        });
    } catch (err) {
        res.status(400).json({ message: "Not able to return restaurant list currently" });
    }
}
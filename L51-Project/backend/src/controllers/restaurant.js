import Restaurant from "../models/restaurant.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import uploadOnCloudinary, { uploadBatchOnCloudinary } from "../utils/uploadOnCloudinary.js";

export const postRestaurant = ErrorWrapper(async (req, res, next) => {
    const { name, address, contact } = req.body;
    const email = req.user.email;
    console.log(email);
    if (!email) {
        throw new ErrorHandler(401, "Please verify your email and Try again!");
    }

    const incomingFields = Object.keys(req.body);
    // How to identify the missingFields?
    const requiredFields = ["name", "address", "contact"];
    const missingFields = requiredFields.filter((field) => !incomingFields.includes(field));
    // To read image we need to use multer
    if (missingFields.length > 0) {
        // Status codes are necessary to throw errors
        throw new ErrorHandler(401, `Provide missing fields ${missingFields.join(',')} to add a restaurant`);
    }
    let restaurant;
    try {
        restaurant = await Restaurant.findOne({
            $or: [
                { name },
                { address }
            ]
        });
    }
    catch (error) {
        throw new ErrorHandler(500, error.message);
    }

    if (restaurant) {
        throw new ErrorHandler(401, `Restaurant with name ${name} or address ${address} already exists`);
    }
    let cloudinaryResponse;
    try {
        cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    } catch (error) {
        throw new ErrorHandler(500, error.message);
    }
    console.log(req.user);

    try {
        let newRestaurant = await Restaurant.create({
            name,
            address,
            email,
            contact,
            coverImage: cloudinaryResponse.url,
            owner: req.user._id
        });

        // console.log(newRestaurant);

        res.status(201).json({
            success: true,
            message: "Restaurant added successfully",
            data: newRestaurant
        });

    } catch (error) {
        throw new ErrorHandler(500, "Not able to add restaurant right now!");
    }
})








export const postCusineCategoryAdd = ErrorWrapper(async (req, res, next) => {
    const { categories, restaurant_name } = req.body;


    let newCusineCategories = categories.split(',');
    newCusineCategories = newCusineCategories.map(c => c.trim().toLowerCase());

    if (!newCusineCategories.length) throw new ErrorHandler(400, "Please provide the valid categories to add");

    try {
        let restaurant = await Restaurant.findOne({
            name: restaurant_name
        });

        if (restaurant.email !== req.user.email) {
            throw new ErrorHandler(401, "You are not authorized to add categories to this restaurant");
        }

        if (!restaurant) throw new ErrorHandler(400, "Restaurant not found, cannot add categories!");
        let existingCusines = restaurant.cusines;
        if (existingCusines.length) {
            let newCusines = newCusineCategories.filter((cusine) => {
                for (let i = 0; i < existingCusines.length; i++) {
                    if (existingCusines[i].category == cusine) return false;
                }
                return true;
            });
            newCusineCategories = newCusines;
        }

        let newCusines = [];
        for (let i = 0; i < newCusineCategories.length; i++) {
            let category = newCusineCategories[i];
            let newCusine = {
                category,
                food: []
            };
            newCusines.push(newCusine);
        }

        if (newCusines.length) {
            restaurant.cusines = [...newCusines, ...existingCusines];
            restaurant.save();
        }
        res.status(200).json({
            message: "Categories added successfully!",
            data: restaurant
        });

    } catch (error) {
        throw new ErrorHandler(500, error.message);
    }

})







export const postAddFoodItem = ErrorWrapper(async (req, res, next) => {
    const requiredFields = ["category", "name", "price", "veg", "restaurant_name", "description"];
    const incomingFields = Object.keys(req.body);
    // How to identify the missingFields
    const missingFields = requiredFields.filter((field) => !incomingFields.includes(field));
    if (missingFields.length > 0) {
        // Status codes are necessary to throw errors
        throw new ErrorHandler(401, `Provide missing fields ${missingFields.join(',')} to add a restaurant`);
    }

    try {
        let { category, name, price, veg, restaurant_name, description } = req.body;
        category = category.toLowerCase();
        name = name.toLowerCase();
        restaurant_name = restaurant_name.toLowerCase();
        description = description.toLowerCase();
        veg = veg.toLowerCase();

        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }
        console.log(restaurant.cusines);
        let index = -1;
        for (let i = 0; i < restaurant.cusines.length; i++) {
            if (restaurant.cusines[i].category === category) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            throw new ErrorHandler(404, `Please add the category first in which you want to add ${name} eatable`);
        }

        let cloudinaryResponse = {
            url: ""
        };
        if (req.file.path) {
            cloudinaryResponse = await uploadOnCloudinary(req.file.path);
        }
        let vegVal = (veg === 'true' ? true : false);
        let newFoodItem = {
            name: name,
            price: +price,
            veg: vegVal,
            description: description,
            images: [{
                url: cloudinaryResponse.url
            }]
        }
        // console.log(restaurant.cusines[index]);
        restaurant.cusines[index]["food"].push(newFoodItem);
        await restaurant.save();

        res.status(200).json({
            message: "Food item added successfully!",
            data: restaurant
        })

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})




export const postUpdateFoodItem = ErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { name, price, veg, description, category, restaurant_name } = req.body;
    console.log(req.user);
    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }

        const user = req.user;
        if (user._id.toString() !== restaurant.owner.toString()) {
            throw new ErrorHandler(401, "You are not authorized to perform this action");
        }

        const index = restaurant.cusines.findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(404, `Please add the category first in which you want to update the food item of ${restaurant_name}`);
        }

        const foodIndex = restaurant.cusines[index]["food"].findIndex((item) => item._id.toString() === id.toString());
        // console.log(restaurant.cusines[index]["food"]);
        if (foodIndex == -1) {
            throw new ErrorHandler(404, `Please provide the correct details - food or id inorder to update the details`);
        }

        if (name) restaurant.cusines[index]["food"][foodIndex].name = name;
        if (price) restaurant.cusines[index]["food"][foodIndex].price = price;
        if (veg) restaurant.cusines[index]["food"][foodIndex].veg = veg;
        if (description) restaurant.cusines[index]["food"][foodIndex].description = description;

        console.log(req.file);
        if (req.file) {
            const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
            const { url } = cloudinaryResponse;
            restaurant.cusines[index]["food"][foodIndex].image = url;
        }

        await restaurant.save();
        res.status(200).json({
            message: "Food item updated successfully!",
            data: restaurant
        })

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }

})




export const getDeleteFoodItem = ErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { restaurant_name, category } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }
        const user = req.user;
        if (user._id.toString() !== restaurant.owner.toString()) {
            throw new ErrorHandler(401, "You are not authorized to perform this action");
        }
        const index = restaurant.cusines.findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(404, `Please add the category first in which you want to update the food item of ${restaurant_name}`);
        }
        const foodIndex = restaurant.cusines[index]["food"].findIndex((item) => item._id.toString() === id.toString());
        console.log(restaurant.cusines[index]["food"]);
        console.log(foodIndex);
        if (foodIndex == -1) {
            throw new ErrorHandler(404, `Please provide the correct details - food or id inorder to update the details`);
        }

        restaurant.cusines[index]["food"].splice(foodIndex, 1);
        await restaurant.save();
        res.status(200).json({
            message: "Food item deleted successfully!",
            data: restaurant
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})



export const getFoodItems = ErrorWrapper(async (req, res, next) => {
    const { restaurant_name, category } = req.query;
    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }
        const user = req.user;
        if (user._id.toString() !== restaurant.owner.toString()) {
            throw new ErrorHandler(401, "You are not authorized to perform this action");
        }
        const index = restaurant.cusines.findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(404, `Please add the category first in which you want to update the
                    food item of ${restaurant_name}`);
        }
        const food = restaurant.cusines[index]["food"];
        res.status(200).json({
            message: "Food items fetched successfully!",
            data: food
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})

export const getFoodItem = ErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { restaurant_name, category } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }
        const user = req.user;
        if (user._id.toString() !== restaurant.owner.toString()) {
            throw new ErrorHandler(401, "You are not authorized to perform this action");
        }
        const index = restaurant.cusines.findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(404, `Please add the category first in which you want to update the
                    food item of ${restaurant_name}`);
        }

        const foodIndex = restaurant.cusines[index]["food"].findIndex((item) => item._id.toString() === id.toString());
        if (foodIndex == -1) {
            throw new ErrorHandler(404, `Food item with id ${id} not found`);
        }

        const food = restaurant.cusines[index]["food"][foodIndex];

        res.status(200).json({
            message: "Food items fetched successfully!",
            data: food
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})





export const getAllCusines = ErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { restaurant_name, category } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }
        const user = req.user;
        if (user._id.toString() !== restaurant.owner.toString()) {
            throw new ErrorHandler(401, "You are not authorized to perform this action");
        }

        const food = restaurant.cusines;

        res.status(200).json({
            message: "Food items fetched successfully!",
            data: food
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})






export const postAddFoodImage = ErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { restaurant_name, category } = req.body;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });

        if (!restaurant) {
            throw new ErrorHandler(404, `Restaurant with name ${restaurant_name} not found`);
        }
        const user = req.user;
        if (user._id.toString() !== restaurant.owner.toString()) {
            throw new ErrorHandler(401, "You are not authorized to perform this action");
        }
        const index = restaurant.cusines.findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(404, `Food item with name ${category} not found`);
        }

        const foodIndex = restaurant.cusines[index]["food"].findIndex((item) => item._id.toString() === id.toString());
        if (foodIndex == -1) {
            throw new ErrorHandler(404, `Food item with id ${id} not found`);
        }

        const food = restaurant.cusines[index]["food"][foodIndex];
        const images = req.files;

        if (images.length == 0) {
            throw new ErrorHandler(400, "Please provide images to upload");
        }
        const imageUrls = [];
        console.log(images);
        const cloudinaryResult = await uploadBatchOnCloudinary(images);

        for (let i = 0; i < cloudinaryResult.length; i++) {
            imageUrls.push({
                url: cloudinaryResult[i].url
            });
        }

        food.images = [...imageUrls, ...food.images];

        await restaurant.save();

        res.status(200).json({
            success: true,
            message: "Images uploaded successfully",
            data: food,
        });
    }
    catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})





// CRUD ON REVIEWS
export const postAddReview = ErrorWrapper(async (req, res, next) => {
    const { restaurant_name, rating, message } = req.body;
    const { name } = req.user;
    const userId = req.user._id

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found");
        }

        if (userId.toString() === restaurant.ownerId.toString()) {
            throw new ErrorHandler(400, "You can't review your own restaurant");
        }

        if (Number(rating) < 1 || Number(rating) > 5) {
            throw new ErrorHandler(400, "Rating must be between 1 and 5");
        }

        const response = await uploadBatchOnCloudinary(req.files);
        const imageUrl = [];
        for (let i = 0; i < response.length; i++) {
            imageUrl.push({
                "url": response[i].url
            });
        }

        const review = {
            username: name,
            rating: +rating,
            message,
            userId,
            images: imageUrl,
        };
        restaurant.reviews.push(review);
        await restaurant.save();
        res.status(201).json({
            success: true,
            message: "Review added successfully",
            review,
        });
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }


})




export const postUpdateReview = ErrorWrapper(async (req, res, next) => {
    const { reviewId } = req.params;
    const { restaurant_name, rating, message } = req.body;
    const userId = req.user._id;
    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }
        const index = restaurant["reviews"].findIndex(r => r._id.toString() == reviewId.toString());
        if (index === -1) {
            throw new ErrorHandler(404, "Review not found, that you are trying to update");
        }
        if (userId.toString() !== restaurant["reviews"][index].userId.toString()) {
            throw new ErrorHandler(401, "You are not authorized to update this review");
        }

        if (Number(rating) < 1 || Number(rating) > 5) {
            throw new ErrorHandler(400, "Rating must be between 1 and 5");
        }

        if (rating) restaurant["reviews"][index].rating = +rating;
        if (message) restaurant["reviews"][index].message = message;
        await restaurant.save();
        res.status(200).json({
            success: true,
            message: "Review updated successfully",
            restaurant,
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }

})






export const getDeleteReview = ErrorWrapper(async (req, res, next) => {
    const { reviewId } = req.params;
    const { restaurant_name } = req.query;
    const userId = req.user._id;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }
        const index = restaurant["reviews"].findIndex(r => r._id.toString() == reviewId.toString());
        if (index === -1) {
            throw new ErrorHandler(404, "Review not found, that you are trying to update");
        }
        if (userId.toString() !== restaurant["reviews"][index].userId.toString()) {
            throw new ErrorHandler(401, "You are not authorized to update this review");
        }
        await restaurant["reviews"].splice(index, 1);
        await restaurant.save();
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
            restaurant,
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }

})








export const getAllReviews = ErrorWrapper(async (req, res, next) => {
    const { restaurant_name } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }

        res.status(200).json({
            success: true,
            message: "Reviews fetched successfully",
            reviews: restaurant["reviews"],
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})





export const getReview = ErrorWrapper(async (req, res, next) => {
    const { reviewId } = req.params;
    const { restaurant_name } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }
        const index = restaurant["reviews"].findIndex(r => r._id.toString() == reviewId.toString());
        if (index === -1) {
            throw new ErrorHandler(404, "Review not found, that you are trying to update");
        }

        res.status(200).json({
            success: true,
            message: "Review fetched successfully",
            review: restaurant["reviews"][index]
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})




export const getRestaurants = ErrorWrapper(async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find();

        res.status(200).json({
            success: true,
            message: "Restaurants fetched successfully",
            restaurants: restaurants
        });
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }

})



export const getRestaurant = ErrorWrapper(async (req, res, next) => {
    const { restaurantId } = req.params;
    try {
        const restaurants = await Restaurant.find({ _id: restaurant_id });

        res.status(200).json({
            success: true,
            message: "Restaurants fetched successfully",
            restaurant: restaurant
        });
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})
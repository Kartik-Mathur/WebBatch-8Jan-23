import Restaurant from "../models/restaurant.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";

export const postRestaurant = ErrorWrapper(async (req, res, next) => {
    const { name, address, email, contact } = req.body;

    const incomingFields = Object.keys(req.body);
    // How to identify the missingFields?
    const requiredFields = ["name", "address", "email", "contact"];
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

    try {
        let newRestaurant = await Restaurant.create({
            name,
            address,
            email,
            contact,
            coverImage: cloudinaryResponse.url
        });

        console.log(newRestaurant);
        res.status(201).json({
            success: true,
            message: "Restaurant added successfully",
            data: newRestaurant
        });

    } catch (error) {
        throw new Error(500, "Not able to add restaurant right now!");
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
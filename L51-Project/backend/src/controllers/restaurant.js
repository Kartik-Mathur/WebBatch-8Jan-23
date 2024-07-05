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

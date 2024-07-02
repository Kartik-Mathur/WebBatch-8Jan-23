import User from "../models/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";

export const postSignup = ErrorWrapper(async function (req, res, next) {
    const { username, password, email, name } = req.body;
    const incomingFields = Object.keys(req.body);
    // How to identify the missingFields?
    const requiredFields = ["username", "password", "email", "name"];
    const missingFields = requiredFields.filter((field) => !incomingFields.includes(field));
    // To read image we need to use multer
    if (missingFields.length > 0) {
        // Status codes are necessary to throw errors
        throw new ErrorHandler(401, `Provide missing fields ${missingFields.join(',')} to signup`);
    }

    let existingUser = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (existingUser) {
        throw new ErrorHandler(401, `User with username ${username} or email ${email} already exists`);
    }

    let cloudinaryResponse;
    try {
        cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    } catch (error) {
        throw new ErrorHandler(500, `Error while uploading image ${error.message}`);
    }

    try {
        const user = await User.create({
            username,
            password,
            email,
            name,
            image: cloudinaryResponse.secure_url
        });

        let newUser = await User.findOne({
            _id: user._id
        }).select("-password");
        
        res.status(201).json({
            success: true,
            user: newUser
        });

    } catch (error) {
        throw new ErrorHandler(500, `Error while creating new user`);
    }
})
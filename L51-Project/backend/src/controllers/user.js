import User from "../models/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";
import jwt from "jsonwebtoken";

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






const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        let user = await User.findOne({
            _id: userId
        });
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        return {
            accessToken,
            refreshToken
        }
    } catch (error) {
        throw new ErrorHandler(500, `Error while generating access token and refresh token`);
    }
}

export const postLogin = ErrorWrapper(async function (req, res, next) {
    const { username, email, password } = req.body;
    if (!username && !email) {
        throw new ErrorHandler(400, "Please enter either username or email");
    }
    if (!password) {
        throw new ErrorHandler(400, "Please enter password");
    }
    let user = await User.findOne({
        $or: [{ username }, { email }]
    });
    if (!user) {
        throw new ErrorHandler(400, "Invalid username or email");
    }

    const passwordMatch = user.isPasswordCorrect(password);
    if (!passwordMatch) {
        throw new ErrorHandler(400, "Invalid password");
    }
    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);
    user.refreshToken = refreshToken;
    // console.log(user);
    await user.save();
    user = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    }).select("-password -refreshToken")

    res.status(200)
        .cookie("RefreshToken", refreshToken)
        .cookie("AccessToken", accessToken)
        .json({
            success: true,
            message: "Login Successfull",
            user
        });
})
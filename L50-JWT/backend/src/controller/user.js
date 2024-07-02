import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";

export const postLogin = async (req, res, next) => {
    const { password } = req.body;
    try {
        const user = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.email }
            ]
        });
        if (!user) {
            res.json(
                new ErrorHandler(401, "User not found, incorrect emailId or username!")
            )
        }

        // const isPasswordCorrect = await user.checkPassword(password);

        // if (!isPasswordCorrect) {
        //     throw new Error("Incorrect password!");
        // }

        const newToken = await user.generateToken();
        res
            .status(200)
            .cookie('jwt', newToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24
            })
            .json({
                message: "Success",
                token: newToken
            })

    } catch (error) {
        throw new ErrorHandler(401, "Error while logging in the user");
    }
}


export const postSignup = async (req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        throw new ErrorHandler(401, "Details missing, Provide all the details to signup!");
    }

    try {
        let newUser = await User.create({
            username,
            password,
            email
        })

        return res.status(200).json(newUser);
    } catch (error) {
        throw new ErrorHandler(500, "Error while new signup");
    }
}


export const getHome = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            throw new ErrorHandler(401, "Unauthorized");
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await User.findOne({
            _id: decoded._id
        })

        if (!user) {
            throw new ErrorHandler(401, "User not found");
        }

        const newToken = await user.generateToken();

        return res.status(200).json({
            message: "Welcome to the home page",
            user,
            token: newToken
        })
    }
    catch (err) {
        throw new ErrorHandler(500, "Cannot access the home page")
    }
}
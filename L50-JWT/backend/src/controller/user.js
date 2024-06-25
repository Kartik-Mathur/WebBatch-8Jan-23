import jwt from "jsonwebtoken";
import User from "../models/user.js";

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
            throw new Error("User not found, incorrect emailId or username!");
        }
        const isPasswordCorrect = await user.checkPassword(password);
        if (!isPasswordCorrect) {
            throw new Error("Incorrect password!");
        }

        const token = jwt.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET);

        user.token = token;
        await user.save();

        console.log(user);
        res
            .status(200)
            .cookies("jwt", token, {
                httpOnly: true,
                secure: true
            })
            .json({
                message: "Success"
            })
    } catch (error) {
        throw new Error("Error while logging in the user");
    }
}


export const postSignup = async (req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        throw new Error("Details missing, Provide all the details to signup!");
    }

    try {
        let newUser = await User.create({
            username,
            password,
            email
        })

        return res.status(200).json(newUser);
    } catch (error) {
        throw new Error("Error while new signup");
    }
}
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: "String",
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: "String",
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: ""
    }
});


// To hash password before we save the user, we can write the entire code here
userSchema.pre("save", async function (next) {
    try {
        const user = this;
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
        next();
    } catch (error) {
        // this will crash the backend
        throw new Error("Error while hashing the password before saving user");
    }
});


userSchema.methods.checkPassword = async function (password) {
    try {
        const user = this;
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        return isPasswordCorrect;
    } catch (error) {
        throw new Error("Error while checking password");
    }
}

userSchema.methods.generateToken = async function () {
    try {
        let user = this;

        const token = jwt.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET);

        user.token = token;
        await user.save();
        return token;
    } catch (error) {
        throw new Error("Cannot generate the token for the current user");
    }
}

const User = mongoose.model("User", userSchema);
export default User
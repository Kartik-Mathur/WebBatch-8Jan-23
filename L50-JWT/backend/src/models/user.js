import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

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
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    token: {
        type: String,
        default: undefined
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


const User = mongoose.model("User", userSchema);
export default User
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    image: {
        type: String, // cloudinary url
        required: true
    },
    orderHistory: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            items: [
                {
                    name: String,
                    price: Number,
                    quantity: Number,
                    id: {
                        type: Schema.Types.ObjectId,
                        ref: "Food"
                    }
                }
            ]
        }
    ],
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})


const User = mongoose.model("User", userSchema);
export default User
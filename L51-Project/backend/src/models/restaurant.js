import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const restaurantSchema = new Schema({
    name: {
        type: "String",
        lowercase: true,
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: "String",
        lowercase: true,
        unique: true,
        required: true
    },
    email: {
        type: "String",
        lowercase: true,
        unique: true,
        required: true
    },
    contact: {
        type: "String",
        required: true
    },
    coverImage: {
        type: "String",
        required: true
    },
    images: [
        {
            url: "String"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    rating: Number,
    cusines: [
        {
            category: String,
            food: [
                {
                    name: String,
                    price: Number,
                    description: String,
                    type: String,
                    images: [
                        {
                            url: String
                        }
                    ]
                }
            ]
        }
    ],
    // cusineCategories: [
    //     {
    //         name: String
    //     }
    // ],
    menu: [
        {
            imageUrl: String
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                default: 1
            },
            images: [
                {
                    imageUrl: String
                }
            ],
            message: {
                type: String
            },
            name: String
        }
    ]
}, {
    timestamps: true
});

const restaurant = mongoose.model("Restaurant", restaurantSchema);
export default restaurant;
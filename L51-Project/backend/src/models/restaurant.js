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
        ref: "User",
        required: true
    },
    rating: Number,
    cusines: [
        {
            category: {
                type: 'String',
                lowercase: true
            },
            food: [
                {
                    name: String,
                    price: Number,
                    description: String,
                    veg: Boolean,
                    images: [
                        {
                            url: String
                        }
                    ]
                }
            ]
        }
    ],
    cusineCategories: [
        {
            name: String
        }
    ],
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

// restaurantSchema.pre('save',function(next){
//     if(!this.isModified("cusines")) return next();

//     let cusines = this.cusines;
//     let newCusineCategories = [];
//     cusines.forEach(cusine => {
//         newCusineCategories.push(cusine.category);
//     })
// })

const restaurant = mongoose.model("Restaurant", restaurantSchema);
export default restaurant;
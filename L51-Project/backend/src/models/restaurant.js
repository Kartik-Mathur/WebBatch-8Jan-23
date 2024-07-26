import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler.js";


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
    ownerId: {
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
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                default: 1
            },
            images: [
                {
                    url: String
                }
            ],
            message: {
                type: String
            },
            username: String
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

restaurantSchema.methods.getFoodItem = async function (category, id) {
	const restaurant = this;
	try {
        
        const index = restaurant.cusines.findIndex((cusine) => cusine.category === category);

        if (index == -1) throw new ErrorHandler(404, "This category is not available in this restaurant");
        
        const foodIndex = restaurant.cusines[index]["food"].findIndex((food) => food._id.toString() === id.toString());

        if (foodIndex == -1) throw new ErrorHandler(404, "Please provide the correct food_id to add images in food");

		let food = restaurant.cusines[index]['food'][foodIndex];
		
		return {
			foodItem: food,
			index,
			foodIndex
		};
	} catch (error) {
		throw new ErrorHandler(error.statusCode || 500, error.message);
	}
}

const restaurant = mongoose.model("Restaurant", restaurantSchema);
export default restaurant;
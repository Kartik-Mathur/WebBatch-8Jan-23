const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    cart: [{
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref:"products"
        },
        quantity: Number
    }]
})

module.exports = mongoose.model('users', userSchema);

let users = [
    {
        "name": "Pratik",
        "email":"pratik@gmail.com",
        "password": "123456",
        "cart": []
    },
    {
        "name": "Dhairya",
        "email":"dhairya@gmail.com",
        "password": "654321",
        "cart": []
    },
    {
        "name": "Raman",
        "email":"raman@gmail.com",
        "password": "abc@gmail",
        "cart": []
    },
]
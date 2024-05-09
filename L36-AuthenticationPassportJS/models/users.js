const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String, // Incase of google this is displayName
        required:true
    },
    password: String,
    googleImg: String,
    googleAccessToken: String,
    googleId: String
});

module.exports = mongoose.model('Users',userSchema);
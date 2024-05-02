const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('users',userSchema);
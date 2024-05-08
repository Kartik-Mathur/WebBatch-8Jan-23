const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required:true,
        unique: true
    },
    password: String
});

module.exports = mongoose.model('Users',userSchema);
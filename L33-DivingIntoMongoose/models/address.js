const mongoose = require('mongoose');
const {Schema} = mongoose;

const addressSchema = new Schema({
    details:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('address',addressSchema);
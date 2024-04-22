const mongoose = require('mongoose');
const {Schema} = mongoose;

const addressSchema = new Schema({
    details:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('address',addressSchema);

// let addressDetails = [
//     {
//         details: "Noida, Coding Blocks"
//     },
//     {
//         details: "Pitampura, Coding Blocks"
//     },
//     {
//         details: "Lucknow, Coding Blocks"
//     },
//     {
//         details: "Las vegas, Coding Blocks"
//     }
// ]
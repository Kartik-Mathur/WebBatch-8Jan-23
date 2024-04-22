const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    marks: {
        type: Number
    }
});

module.exports = mongoose.model('students',studentSchema);
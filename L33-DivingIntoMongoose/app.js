const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const address = require('./models/address');
const students = require('./models/students');


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST: /student
// name, age, marks
app.post('/student', async (req, res) => {
    try {
        const { name, age, marks } = req.body;
        let stu = await students.create({ name, age, marks });

        res.send({
            msg: "Student Created Successfully",
            student: stu
        })
    }
    catch (err) {
        console.log(err);
    }
})

// /students/:limit/:skip, params
// /students?limit=10&skip=0, queryparameter
app.get('/students', async (req, res) => {
    let { limit, skip } = req.query;
    limit = +limit;
    skip = +skip;
    let stu = await students.find({}).populate('address_id');
    console.log(stu)
        // .skip(skip)
        // .limit(limit)
        
    
    // res.send({
    //     students: stu
    // })
})

// app.post('/update', async (req, res) => {

// })


mongoose.connect('mongodb://127.0.0.1:27017/codingblocks')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })
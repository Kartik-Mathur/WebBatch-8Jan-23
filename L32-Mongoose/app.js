const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname,'')));

// POST: /student
// name, age, marks
app.post('/student', async (req, res) => {
    const { name, age, marks } = req.body;

})

// /students/:limit/:skip, params
// /students?limit=10&skip=0, queryparameter
app.get('/students', async (req, res) => {
    let { limit, skip } = req.query;

})

app.post('/update', async (req, res) => {

})

mongoose.connect('mongodb://127.0.0.1:27017/codingblocks')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })
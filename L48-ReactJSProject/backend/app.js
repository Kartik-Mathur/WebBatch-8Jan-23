const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use('/admin', require('./routes/admin'));
// app.use('/', require('./routes/user'));
// app.use('/restaurant',);


mongoose.connect('mongodb://127.0.0.1:27017/foodapp').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})






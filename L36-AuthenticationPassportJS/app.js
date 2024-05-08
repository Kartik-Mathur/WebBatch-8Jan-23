const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes/user'));

require('mongoose').connect('mongodb://127.0.0.1:27017/authentication').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
}).catch(err => console.log(err));
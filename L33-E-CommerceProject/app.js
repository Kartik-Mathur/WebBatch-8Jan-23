const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');
const User = require('./models/user');

app.use(async (req,res,next)=>{
    let user = await User.findOne({
        _id: "662a79a13f4df07dddc9667d"
    });
    req.user = user;
    next();
})

// setting up the partials of HBS
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index');
})

// Routes
// /admin, /admin/abc, /admin/abc/def, /admin/abc/../../
const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);

const shopRouter = require('./routes/shop');
app.use('/shop', shopRouter);

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
}).catch(err => {
    console.log(err)
})
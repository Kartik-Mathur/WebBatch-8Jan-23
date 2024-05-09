const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');

// app.use(async (req,res,next)=>{
//     let user = await User.findOne({
//         _id: "663259d7561a8ed3c6c28c9c"
//     });
//     req.user = user;
//     next();
// })

const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/' })
}))

const passport = require('./authentication/passport');
app.use(passport.initialize());
app.use(passport.session());

// setting up the partials of HBS
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

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

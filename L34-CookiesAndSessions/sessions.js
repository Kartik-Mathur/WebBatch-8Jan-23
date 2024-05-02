const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'aksdashdasjhed javjahvdjavs',
    resave: false, // Do you want to resave the cookie if there are no changes in it
    saveUninitialized: true// create the cookie irrespective of cookie is 
    // required or not
}))

// if we have logged in before then we cannot go to /login again

app.post('/login', (req, res) => {
    // This will create a cookie
    const { username } = req.body;
    req.session.cnt = 0; // set the count in session-map
    req.session.username = username; // set the username in session-map
    req.session.isAdmin = true;
    res.redirect('/profile');
})

app.get('/login', (req, res, next) => {
    if(req.session.username) return res.redirect('/profile')
    res.render('login');
});

// We cannot access profile before login
app.get('/profile', (req, res, next) => {

    if (!req.session.username)
        return res.redirect('/login');
    req.session.cnt++;
    res.render('profile', {
        username: req.session.username,
        cnt: req.session.cnt
    });
})

app.get('/admin', (req, res) => {

    if (!req.session.isAdmin)
        return res.redirect('/login');

    return res.render('admin');
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});
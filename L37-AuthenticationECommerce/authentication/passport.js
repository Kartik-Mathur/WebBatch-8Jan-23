const passport = require('passport');

const LocalStrategy = require('passport-local');
const Users = require('../models/user');
const bcrypt = require('bcrypt');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENTSECRET,
    callbackURL: "http://localhost:4444/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            const user = await Users.findOne({ googleId: profile.id });
            if (user) {
                return done(null, user);
            }
            const newUser = await Users.create({
                googleId: profile.id,
                username: profile.displayName,
                googleAccessToken: accessToken,
                googleImg: profile.picture
            });
            return done(null, newUser);
        } catch (err) {
            done(err);
        }
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
    }
));

// Strategy ko congfigure krna
passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            const user = await Users.findOne({ username: username });
            if (!user) {
                return done(null, false);
            }

            bcrypt.compare(password, user.password, function (err, result) {
                if (!result) return done(null, false);
                return done(null, user);
            });
        } catch (err) {
            done(err);
        }
        /*
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
        */
    }
));


// PASSPORT SETUP
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await Users.findOne({ _id: id });
        done(null, user);
    } catch (err) {
        done(err);
    }
    // User.findById(id, function (err, user) {
    //     done(err, user);
    // });
});



module.exports = passport;
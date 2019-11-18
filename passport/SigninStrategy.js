const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

var salt = bcrypt.genSaltSync(10);


const LoginStrategy = new Strategy({ usernameField: 'email' }, function (email, password, done) {
    // what should be happening once user signup
    User.findOne({ email }).lean().exec((err, user) => {
        console.log(email)
        if (err) {
            return done(err, null);
        }
        if (!user) {
            return done('User not found', null);
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return done('Email or Password not valid', null);
        }
         return done(null, user);


    });

});


module.exports = LoginStrategy;
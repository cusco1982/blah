const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

var salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({ passReqToCallback: true, usernameField:'email' }, function (req, email, password, done) {
// console.log("email:",req.body.email)
// console.log("email:",req.body.password)
// console.log(email)
// console.log(password)
// console.log(email, password);


    User.findOne({ email }).lean().exec((err, user) => {
        // console.log(err, user);
        // console.log(err);
        // console.log('user:',user);
// console.log('line 17');

        // console.log(err)
        if (err) {
            // console.log(err)
            return done(err, null);
            // console.log(err)
        }
        if (user) {
            return done('User already exists', null);
        }
// console.log('user', user)
        const encryptedPassword = bcrypt.hashSync(password, salt);
        let newUser = new User({
            email,
            password: encryptedPassword
        });
console.log("newuser:", newUser);
        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null);
            }
            delete inserted.password; //todo 
             return done(null, inserted);
        });

    });
    // console.log('End -----------');
});



module.exports = SignupStrategy;
const passport = require ('passport');

// import all the strategies
const SignupStrategy = require("./SignupStrategy");
const SigninStrategy = require("./SigninStrategy");
// const GoogleStrategy = require("./GoogleStrategy");


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;
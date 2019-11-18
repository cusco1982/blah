const express = require('express');
const router = express.Router();
const passport = require('../passport');


router.post('/signup', (req, res, next) => {
// console.log("req:",req);
  // Custom Passport Callback
  passport.authenticate('local-signup', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops something happened'
      });
    }

console.log(user, "user")
    return res.json(user);
  })(req, res, next);

});




router.post('/signin', function (req, res, next) {
  // Custom Passport Callback
  passport.authenticate('local-signin', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops something happened'
      });
    }


    return res.json(user);
  })(req, res, next);

});











module.exports = router;

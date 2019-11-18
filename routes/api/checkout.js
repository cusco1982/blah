const router = require("express").Router();
require('dotenv').config();
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.STRIPE_SECRET);

router.get('/', (req, res) => {
  res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
});
router.post('/', (req, res) => {
  stripe.charges.create(req.body)
.then((result) => {
    res.send(result)
  }).catch(err => console.log(err));
});

module.exports = router;
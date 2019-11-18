const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

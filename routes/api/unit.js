
const router = require("express").Router();
const unitController = require("../../controllers/unitController");

// Matches with "/api/books"
router.route("/")
  .get(unitController.findAll)
  .post(unitController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(unitController.findById)
  .put(unitController.update)
  .delete(unitController.remove);

module.exports = router;

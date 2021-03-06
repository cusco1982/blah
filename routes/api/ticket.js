const router = require("express").Router();
const ticketController = require("../../controllers/ticketController");

// Matches with "/api/books"
router.route("/")
  .get(ticketController.findAll)
  .post(ticketController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ticketController.findById)
  .put(ticketController.update)
  .delete(ticketController.remove);

module.exports = router;

// example to be removed later

const router = require("express").Router();
const tenantController = require("../../controllers/tenantController");

// Matches with "/api/books"
router.route("/")
  .get(tenantController.findAll)
  .post(tenantController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(tenantController.findById)
  .put(tenantController.update)
  .delete(tenantController.remove);

module.exports = router;

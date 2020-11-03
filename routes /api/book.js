const router = require("express").Router();
const bookController = require("../../controllers/bookController");


router.route("/book")
  .get(bookController.findAll);
 

router.route("/search")
.post(bookController.create)
router
  .route("/:id")
  .get(bookController.findById)
  .delete(bookController.remove);

module.exports = router;

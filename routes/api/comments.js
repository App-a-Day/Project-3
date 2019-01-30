const router = require("express").Router();
const commentsController = require("../../controllers/notescontroller");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

  router
  .route("/:id")
  
  .delete(commentsController.remove);

module.exports = router;
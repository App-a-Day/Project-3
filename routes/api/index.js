const router = require("express").Router();
const commentRoutes = require("./comments");

// Comment routes
router.use("/comments", commentRoutes);

module.exports = router;
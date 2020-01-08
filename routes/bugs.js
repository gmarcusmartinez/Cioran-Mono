const { Router } = require("express");
const {
  getBug,
  getBugs,
  createBug,
  updateBug,
  deleteBug
} = require("../controllers/Bugs");
const router = Router();

router
  .route("/")
  .get(getBugs)
  .post(createBug);

router
  .route("/:id")
  .get(getBug)
  .put(updateBug)
  .delete(deleteBug);

module.exports = router;

const { Router } = require("express");
const { register, login, getCurrentUser } = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/me", protect, getCurrentUser);

module.exports = router;

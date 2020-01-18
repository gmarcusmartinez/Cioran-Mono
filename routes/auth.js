const { Router } = require("express");
const {
  register,
  login,
  getCurrentUser,
  forgotPassword
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/me", protect, getCurrentUser);
router.post("/forgotPassword", forgotPassword);

module.exports = router;

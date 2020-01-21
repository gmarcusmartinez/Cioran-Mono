const { Router } = require("express");
const {
  register,
  login,
  logout,
  getCurrentUser,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword
} = require("../controllers/auth");

const { protect } = require("../middleware/auth");

const router = Router();

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);
router.post("/me", protect, getCurrentUser);

router.put("/updatedetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);

router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;

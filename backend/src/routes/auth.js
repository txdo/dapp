const express = require("express");
const { register, isLoggedIn, logout, login } = require("../controllers/auth");
const { authToken } = require("../middleware/authToken");
const upload = require("../middleware/multer");
const router = express.Router();

router.post(
  "/user/register",
  authToken,
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  register
);
router.post("/user/login", authToken, login);
router.get("/user/isLoggedIn", authToken, isLoggedIn);
router.get("/user/logout", authToken, logout);

module.exports = router;

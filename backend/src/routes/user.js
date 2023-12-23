const express = require("express");
const { authToken } = require("../middleware/authToken");
const { getUserInfo, getPeople, editUser } = require("../controllers/user");
const router = express.Router();

router.get("/user/info", authToken, getUserInfo);
router.get("/user/people", authToken, getPeople);
router.post("/user/edit", authToken, editUser);

module.exports = router;

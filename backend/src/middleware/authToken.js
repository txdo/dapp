const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("accessToken");
    next();
  }
};

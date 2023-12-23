const User = require("../models/User");
const { validateRegistrationData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

exports.isLoggedIn = async (req, res) => {
  if (req.user) {
    return res.status(200).send({ isLoggedIn: true });
  }

  res.status(401).send({ isLoggedIn: false });
};

exports.logout = async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ errors: ["User not logged in"] });
  }

  res
    .clearCookie("accessToken")
    .status(200)
    .send({ message: "User logged out successfully" });
};

exports.register = async (req, res) => {
  if (req.user) {
    return res.status(400).send({ errors: ["User already logged in"] });
  }

  const errors = validateRegistrationData(req.body);

  if (errors.length > 0) {
    if (req.files && req.files["profilePicture"]) {
      const profilePicturePath = req.files["profilePicture"][0].path;
      fs.unlinkSync(profilePicturePath);
    }

    if (req.files && req.files["photos"]) {
      req.files["photos"].forEach((photo) => {
        const photoPath = photo.path;
        fs.unlinkSync(photoPath);
      });
    }

    return res.status(400).send({ errors });
  }

  if (await User.findOne({ username: req.body.username })) {
    return res.status(400).send({ errors: ["Username already exists"] });
  }

  const passwordHash = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: passwordHash,
    location: req.body.location,
    interests: req.body.interests,
    profilePicture: req.files["profilePicture"][0].filename,
    photos: req.files["photos"].map((photo) => photo.filename),
    gender: req.body.gender,
    lookingToDate: req.body.lookingToDate,
    age: req.body.age,
    bio: req.body.bio,
  });

  const token = jwt.sign(
    { _id: user._id, firstName: user.firstName, lastName: user.lastName },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return res
    .status(201)
    .cookie("accessToken", token)
    .send({ message: "User created successfully" });
};

exports.login = async (req, res) => {
  if (req.user) {
    return res.status(400).send({ errors: ["User already logged in"] });
  }

  const user = await User.findOne({ username: req.body.username });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({ errors: ["Invalid credentials"] });
  }

  const token = jwt.sign(
    { _id: user._id, firstName: user.firstName, lastName: user.lastName },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res
    .status(200)
    .cookie("accessToken", token)
    .send({ message: "Logged in successfully" });
};

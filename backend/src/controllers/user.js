const User = require("../models/User");

exports.getUserInfo = async (req, res) => {
  if (!req.user) return res.status(400).send({ message: "User not logged in" });

  const user = await User.findOne({ _id: req.user._id });

  const userInfo = {
    firstName: user.firstName,
    lastName: user.lastName,
    bio: user.bio,
    age: user.age,
    lookingToDate: user.lookingToDate,
    interests: user.interests,
    location: user.location,
    gender: user.gender,
    photos: user.photos,
    profilePicture: user.profilePicture,
  };

  res.status(200).send({ userInfo });
};

exports.getPeople = async (req, res) => {
  if (!req.user) return res.status(400).send({ message: "User not logged in" });

  const user = await User.findById(req.user._id).populate("matches");

  let people =
    user.lookingToDate === "everyone"
      ? await User.find({})
      : await User.find({ gender: user.lookingToDate });

  people = people.filter(
    (person) =>
      person._id !== user._id &&
      !user.matches.includes(person._id) &&
      person.lookingToDate === user.gender
  );

  res.status(200).send({ people });
};

exports.editUser = async (req, res) => {
  if (!req.user) return res.status(400).send({ message: "User not logged in" });

  await User.findByIdAndUpdate(req.user._id, req.body);
  res.status(200).send({ message: "User updated" });
};

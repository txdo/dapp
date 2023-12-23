const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  profilePicture: String,
  location: String,
  interests: [String],
  photos: [String],
  gender: String,
  lookingToDate: String,
  age: Number,
  bio: String,
  seen: { type: [mongoose.Schema.Types.ObjectId], ref: "users" },
  matches: { type: [mongoose.Schema.Types.ObjectId], ref: "users" },
  chats: { type: [mongoose.Schema.Types.ObjectId], ref: "chats" },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;

const mongoose = require("mongoose");
require("dotenv").config();

exports.connectToDB = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
};

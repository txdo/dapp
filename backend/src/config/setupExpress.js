const express = require("express");
const cookieParsers = require("cookie-parser");
const cors = require("cors");
const constants = require("../constants");

exports.setupExpress = () => {
  const app = express();

  app.use(express.json({ limit: "50mb" }));
  app.use(cookieParsers());
  app.use(cors({ origin: "http://localhost:5173", credentials: true }));
  app.use("/images", express.static("images"));

  app.listen(constants.PORT, () =>
    console.log("Listening on port: " + constants.PORT)
  );

  return app;
};

const { setupExpress } = require("./config/setupExpress");
const { connectToDB } = require("./config/setupMongoDB");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = setupExpress();
connectToDB();

app.use([authRoutes, userRoutes]);

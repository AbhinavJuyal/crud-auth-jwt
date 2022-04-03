const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv").config();
const { connectDB } = require("./config/db");

// middlewares
const logger = require("./middlewares/logger.js");
const { errorMiddleware } = require("./middlewares/errorMiddleware.js");

// mongodb connection
connectDB();

// middlewarse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// routers
app.use("/api/users", require("./routes/api/users.js"));
app.use("/api/goals", require("./routes/api/goals.js"));
app.use("/api/user/login", require("./routes/api/login.js"));
app.use("/api/user/register", require("./routes/api/registration.js"));

// main route
app.get("/", function (req, res) {
  res.send("Server is running!");
});

// error middleware
app.use(errorMiddleware);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));

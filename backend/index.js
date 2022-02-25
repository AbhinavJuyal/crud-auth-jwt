const express = require("express");
const { errorMiddleware } = require("./middlewares/errorMiddleware.js");
const app = express();
const logger = require("./middlewares/logger.js");

// middlewarse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use("/api/users", require("./routes/api/users.js"));

app.get("/", function (req, res) {
  res.send("Server is running!");
});

app.use(errorMiddleware);

const PORT = 3000 || process.env.PORT;

app.listen(3000, () => console.log("Server is running on port 3000!"));

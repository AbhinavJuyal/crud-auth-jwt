require("dotenv").config()
require("colors")

const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

const { connectDB } = require("./config/db")

// middlewares
const logger = require("./middlewares/logger.js")
const { error } = require("./middlewares/error.js")
const router = require("./routes/api/verify.js")

// middlewarse
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)
app.use(cookieParser())

// security
app.use(cors())
app.use(helmet())
app.use(xss())

// routers
const router = express.Router()
app.use("/api", router)
router.use("/goals", require("./routes/api/goals.js"))
router.use("/goals", require("./routes/api/goals.js"))
router.use("/users", require("./routes/api/users.js"))
router.use("/user/login", require("./routes/api/login.js"))
router.use("/user/register", require("./routes/api/registration.js"))
router.use("/verify/email", require("./routes/api/verify.js"))

// main route
app.get("/", function (_, res) {
  res.send("Server is running!")
})

// error middleware
app.use(error)

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
  connectDB()
})

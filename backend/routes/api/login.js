const express = require("express")
const router = express.Router()

const { loginUser } = require("../../controllers/loginUser")

router.post("/", loginUser)

module.exports = router

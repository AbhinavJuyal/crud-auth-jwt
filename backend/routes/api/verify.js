const express = require("express")
const router = express.Router()

const { verifyEmail } = require("../../controllers/verifyEmail")

router.get("/:id", verifyEmail)

module.exports = router

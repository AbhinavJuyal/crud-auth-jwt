const express = require("express");
const router = express.Router();
const User = require("../../models/userModel");
const { verifyEmail } = require("../../controllers/verifyEmail");
const { authRole } = require("../../middlewares/authRole");
const { auth } = require("../../middlewares/auth");

router.route("/:id").get(verifyEmail);

module.exports = router;

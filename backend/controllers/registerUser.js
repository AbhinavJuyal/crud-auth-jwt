const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @access public
// @route GET /api/users/register
// @returns { message, stack? }
const registerUser = asyncHandler(async (req, res) => {
    const response = await User.create(req.body);
    res.status(200).json({ message: "Registration Successfull!" });
});

module.exports = {
    registerUser
}
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateHash } = require("../utils/hash");
const { sendEmail } = require("../utils/sendgrid-mail");
// @access public
// @route GET /api/users/register
// @returns { message, stack? }
const registerUser = asyncHandler(async (req, res) => {
  const hash = generateHash(req.body.email);
  const response = await User.create({ ...req.body, hash });
  const email = await sendEmail(response.email, hash, "verification");
  res.status(200).json({ message: "Registration Successfull!" });
});

module.exports = {
  registerUser,
};

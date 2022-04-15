const asyncHandler = require("express-async-handler");
const { compareHash } = require("../utils/hash");
const User = require("../models/userModel");

const verifyEmail = asyncHandler(async (req, res) => {
  console.log("verifying...");
  const hash = req.params.id;
  const user = await User.findOne({ hash }).exec();
  // res.json(user);
  if (!user) throw new Error("You are using a old verification link");
  if (user.active) throw new Error("Your account is already verified");
  if (compareHash(hash, user.email)) {
    const response = await User.findOneAndUpdate({ _id: user._id }, { hash: null });
    res.status(200).json({ message: "User verified!" });
  }
});

module.exports = {
  verifyEmail,
};

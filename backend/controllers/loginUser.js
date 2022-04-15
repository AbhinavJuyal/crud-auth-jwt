const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const generateJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @access public
// @route GET /api/users/login
// @return { message, token?, stack? }
const loginUser = asyncHandler(async (req, res, next) => {
  const payload = req.body;
  const user = await User.findOne({ email: payload.email });
  if (!user) throw new Error("Account Not Found!");
  // checking password
  User.comparePassword(
    payload.password,
    user.password,
    function (err, isMatch) {
      if (err) next(err);
      if (!isMatch) {
        next(new Error("Invalid Password"));
        return;
      }
      const jwtPayload = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      };
      const jwt = generateJWT(jwtPayload);
      res.cookie("jwt", jwt, {
        httpOnly: true,
      });
      res.status(200).json({ message: "Login Successful", token: jwt });
    }
  );
});

module.exports = { loginUser };

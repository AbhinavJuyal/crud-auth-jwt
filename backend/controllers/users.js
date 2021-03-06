const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @access private
// @route GET /api/users
// @returns [Array : { _id, name, email, password, createdAt, role }]
const getUsersList = asyncHandler(async (req, res) => {
  const users = await User.find().select("-updatedAt -createdAt -__v");
  if (!users) throw new Error("No users found");
  res.status(200).json(users);
});

// @access private
// @route GET /api/users/:id
// @returns { _id, name, email, password, createdAt, role }
const getUserById = asyncHandler(async (req, res) => {
  const requestId = req.params.id;
  const user = await User.findById(requestId).select(
    "-updatedAt -createdAt -__v"
  );
  if (!user) throw new Error("User not found");
  res.status(200).json(user);
});

// @access private
// @route POST /api/users/
// @returns { _id, name, email, password, createdAt, role }
const addUser = asyncHandler(async (req, res) => {
  const requestBody = req.body;
  console.log(req.body);
  const newUser = await User.create(requestBody);
  res.status(201).json({
    message: "New user added",
    request: {
      type: "GET",
      url: `${process.env.BASE_URL}/api/users/${newUser._id}`,
    },
  });
});

// @access private
// @route PUT /api/users/:id
// @returns { _id, name, email, password, createdAt, role }
const updateUser = asyncHandler(async (req, res) => {
  const requestId = req.params.id;
  const requestBody = req.body;
  const updUser = await User.findByIdAndUpdate(requestId, requestBody, {
    new: true,
  });
  if (res.locals.user.id === req.params.id || res.locals.user.role !== "admin")
    throw new Error("You are not authorized to update this user");
  if (!updUser) throw new Error("User not found");
  res.status(200).json({
    message: "User updated successfully",
    request: {
      type: "GET",
      url: `${process.env.BASE_URL}/api/users/${updUser.id}`,
    },
  });
});

// @access private
// @route DELETE /api/users/:id
// @returns { _id, name, email, password, createdAt, role }
const deleteUser = asyncHandler(async (req, res) => {
  const requestId = req.params.id;
  const delUser = await User.findByIdAndDelete(requestId);
  if (!delUser) throw new Error("User not found");
  res.status(200).json({
    deleteCount: delUser,
    message: "User deleted successfully",
  });
});

module.exports = {
  getUsersList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};

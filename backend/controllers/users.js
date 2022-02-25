const asyncHandler = require("express-async-handler")

// @access private
// @route GET /api/users
// @returns [Array : { _id, name, email, password, createdAt, grants }]
const getUsersList = asyncHandler(async (req, res) => {
  res.send("getUserList");
});
// @access private
// @route GET /api/users/:id
// @returns { _id, name, email, password, createdAt, grants }
const getUserById = asyncHandler(async (req, res) => {
  res.send("getUserById");
});
// @access private
// @route POST /api/users/:id
// @returns { _id, name, email, password, createdAt, grants }
const addUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.user || !req.body.pass) {
    res.status(400);
    console.log(res.statusCode);
    throw new Error("Body not found!");
  }
  res.send("addUser");
});
// @access private
// @route PUT /api/users/:id
// @returns { _id, name, email, password, createdAt, grants }
const updateUser = asyncHandler(async (req, res) => {
  res.send("updateUser");
});
// @access private
// @route DELETE /api/users/:id
// @returns { _id, name, email, password, createdAt, grants }
const deleteUser = asyncHandler(async (req, res) => {
  res.send("deleteUser");
});

module.exports = {
  getUsersList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};

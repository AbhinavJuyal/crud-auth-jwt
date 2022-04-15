const express = require("express");
const router = express.Router();
const {
  getUsersList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users");
const { auth } = require("../../middlewares/auth");
const { authRole } = require("../../middlewares/authRole");

router.use(auth);
router.route("/").get(authRole, getUsersList).post(authRole, addUser);
router
  .route("/:id")
  .get(authRole, getUserById)
  .put(authRole, updateUser)
  .delete(authRole, deleteUser);

module.exports = router;

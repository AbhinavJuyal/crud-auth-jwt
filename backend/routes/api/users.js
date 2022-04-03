const express = require("express");
const router = express.Router();
const {
  getUsersList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users");
// const { auth } = require("../../middlewares/authMiddleware");

// router.use(auth)
router.route("/").get(getUsersList).post(addUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
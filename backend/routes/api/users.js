const express = require("express")
const userRoutes = express.Router()

const {
  getUsersList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users")
const { auth } = require("../../middlewares/auth")
const { authRole } = require("../../middlewares/authRole")

userRoutes.get("/", [auth, authRole], getUsersList)

userRoutes.post("/", [auth, authRole], addUser)

userRoutes.get("/:id", [auth, authRole], getUserById)
userRoutes.put("/:id", [auth, authRole], updateUser)
userRoutes.delete("/:id", [auth, authRole], deleteUser)

module.exports = userRoutes

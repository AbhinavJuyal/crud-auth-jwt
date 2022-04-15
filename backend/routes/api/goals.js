const express = require("express")
const goalRoutes = express.Router()
const {
  setGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require("../../controllers/goals")

const { auth } = require("../../middlewares/auth")
const { authRole } = require("../../middlewares/authRole")

goalRoutes.get("/", [auth, authRole], getGoals)

goalRoutes.post("/", [auth, authRole], setGoal)

goalRoutes.delete("/:id", [auth, authRole], deleteGoal)

goalRoutes.put("/:id", [auth, authRole], updateGoal)

module.exports = goalRoutes

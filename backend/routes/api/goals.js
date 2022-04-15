const express = require("express");
const router = express.Router();
const {
  setGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require("../../controllers/goals");
const { auth } = require("../../middlewares/auth");
const { authRole } = require("../../middlewares/authRole");

router.use(auth);
router.route("/").get(authRole, getGoals).post(authRole, setGoal);
router.route("/:id").put(authRole, updateGoal).delete(authRole, deleteGoal);

module.exports = router;

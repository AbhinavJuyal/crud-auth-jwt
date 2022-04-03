const express = require("express");
const router = express.Router();
const {
    setGoal,
    getGoals,
    updateGoal,
    deleteGoal
} = require("../../controllers/goals");
const { auth } = require("../../middlewares/authMiddleware");

router.use(auth);
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
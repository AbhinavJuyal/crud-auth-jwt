const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

/* 
    @access  Private
    @desc    Create goal
    @route   GET /api/goals
*/
const setGoal = asyncHandler(async (req, res) => {
    const { title } = req.body;
    const goal = await Goal.create({ user: req.user.id, title });
    res.status(201).json({ message: "Goal created!", goal });
});

/*
    @access Private
    @desc   Get all goals
    @route /api/goals/
*/
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id }).select("-updatedAt -createdAt -__v");
    res.status(200).json(goals);
});

/*
    @access Private
    @desc   Update goal
    @route /api/goals/:id
*/
const updateGoal = asyncHandler(async (req, res) => {
    const { title } = req.body;
    const goalId = req.params.id
    const goal = await Goal.findByIdAndUpdate(goalId, { title }, { new: true });
    if (!goal) throw new Error("Goal not found");
    res.status(200).json({ message: "Goal updated!", goal });
});

/*
    @access Private
    @desc   delete goal
    @route /api/goals/:id
*/
const deleteGoal = asyncHandler(async (req, res) => {
    const goalId = req.params.id;
    const userId = req.user.id;
    const goal = await Goal.deleteOne({ id: goalId, user: userId });
    res.status(200).json({ message: "Goal deleted!", goal });
});

module.exports = {
    setGoal,
    getGoals,
    updateGoal,
    deleteGoal
}
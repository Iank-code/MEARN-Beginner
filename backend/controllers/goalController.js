// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};


// @desc Set goals
// @route Post /api/goals
// @access private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};


// @desc Update goals
// @route Put /api/goals/:id
// @access private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};


// @desc Delete goals
// @route Delete /api/goals/:id
// @access private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};

// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};


// @desc Set goals
// @route Post /api/goals
// @access private
const SetGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

module.exports = {
  getGoals,
};

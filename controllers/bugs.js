exports.getBugs = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all Bugs" });
};
exports.getBug = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show single bug" });
};
exports.createBug = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create bug" });
};
exports.updateBug = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update bug" });
};
exports.deleteBug = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete bug" });
};

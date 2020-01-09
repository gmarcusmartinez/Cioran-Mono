exports.getProjects = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show All Projects" });
};
exports.getProject = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show Single Project" });
};
exports.createProject = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create Project" });
};
exports.updateProject = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update Project" });
};
exports.deleteProject = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete Project" });
};

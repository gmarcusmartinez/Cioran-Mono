const Project = require("../models/Project");

exports.getProjects = async (req, res, next) => {
  const projects = await Project.find();
  res
    .status(200)
    .json({ success: true, count: projects.length, data: projects });
};
exports.getProject = async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return `Project not found with id of ${req.params.id}`;
  }
  res.status(200).json({ sucess: true, data: project });
};
exports.createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    console.log(error.message);
  }
};
exports.updateProject = async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!project) {
    return `Project not found`;
  }
  res.status(200).json({ sucess: true, data: project });
};
exports.deleteProject = async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return `Project not found`;
  }
  res.status(200).json({ sucess: true, msg: "Project deleted." });
};

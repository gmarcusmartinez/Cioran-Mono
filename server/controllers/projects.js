const Project = require("../models/Project");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getProjects = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new ErrorResponse("Project not found.", 400));
  }
  res.status(201).json({ success: true, data: project });
});

exports.createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
});

exports.updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!project) {
    return next(new ErrorResponse("Project not found.", 400));
  }
  res.status(201).json({ success: true, data: project });
});

exports.deleteProject = asyncHandler(async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, data: {} });
});

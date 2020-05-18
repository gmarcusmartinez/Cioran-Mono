const Project = require('../models/Project');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');

exports.updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!project) {
    return next(new ErrorResponse('Project not found.', 400));
  }
  res.status(201).json({ success: true, data: project });
});

exports.deleteProject = asyncHandler(async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, data: {} });
});

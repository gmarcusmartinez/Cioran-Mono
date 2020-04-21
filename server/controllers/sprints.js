const Sprint = require("../models/Sprint");
const Project = require("../models/Project");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getSprints = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

exports.getSprint = asyncHandler(async (req, res, next) => {
  const sprint = await Sprint.findById(req.params.id);
  if (!sprint) {
    return next(new ErrorResponse("Sprint not found.", 400));
  }
  res.status(201).json({ success: true, data: sprint });
});

exports.createSprint = asyncHandler(async (req, res) => {
  req.body.project = req.params.projectId;

  const project = await Project.findById(req.params.projectId);
  if (!project) return next(new ErrorResponse(`Itinerary not found`));

  const sprint = await Sprint.create(req.body);
  res.status(201).json({ success: true, data: sprint });
});

exports.updateSprint = asyncHandler(async (req, res) => {
  const sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!sprint) {
    return next(new ErrorResponse("Sprint not found.", 400));
  }
  res.status(201).json({ success: true, data: sprint });
});

exports.deleteSprint = asyncHandler(async (req, res) => {
  await Sprint.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, data: {} });
});

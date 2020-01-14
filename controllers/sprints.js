const Sprint = require("../models/Sprint");
const Project = require("../models/Project");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getSprints = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.projectId) {
    query = Sprint.find({ project: req.params.projectId });
  } else {
    query = Sprint.find().populate({
      path: "project",
      select: "name"
    });
  }
  const sprints = await query;

  res.status(200).json({
    success: true,
    count: sprints.length,
    data: sprints
  });
});
exports.getSprint = asyncHandler(async (req, res, next) => {
  const sprint = await Sprint.findById(req.params.id).populate({
    path: "project",
    select: "title"
  });
  if (!sprint) {
    return next(
      new ErrorResponse(`No sprint with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: sprint
  });
});
exports.createSprint = asyncHandler(async (req, res, next) => {
  req.body.project = req.params.projectId;

  const project = await Project.findById(req.params.projectId);
  if (!project) {
    return next(
      new ErrorResponse(`No projects with id of ${req.params.projectId}`, 404)
    );
  }
  const sprint = await Sprint.create(req.body);

  res.status(200).json({
    success: true,
    data: sprint
  });
});

exports.updateSprint = asyncHandler(async (req, res, next) => {
  let sprint = await Sprint.findById(req.params.id);
  if (!sprint) {
    return next(
      new ErrorResponse(`No bootcamp with id of ${req.params.id}`, 404)
    );
  }
  sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: sprint
  });
});

exports.deleteSprint = asyncHandler(async (req, res, next) => {
  const sprint = await Sprint.findById(req.params.id);
  if (!sprint) {
    return next(
      new ErrorResponse(`No sprint with id of ${req.params.id}`, 404)
    );
  }
  await sprint.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

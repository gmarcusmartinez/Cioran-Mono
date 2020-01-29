const Project = require("../models/Project");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getProjects = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ sucess: true, data: project });
});

exports.createProject = asyncHandler(async (req, res, next) => {
  req.body.projectCreator = req.user.id;

  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
});

exports.joinProjectTeam = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  if (project.team.includes(req.user.id)) {
    return next(
      new ErrorResponse(`You have already joined this project.`, 404)
    );
  }

  project.team.push(req.user.id);
  await project.save();

  res.status(200).json({ sucess: true, data: project });
});

exports.updateProject = asyncHandler(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  if (project.projectCreator.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not Authorized.`, 404));
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ sucess: true, data: project });
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }
  if (project.projectCreator.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not Authorized.`, 404));
  }

  project.remove();

  res.status(200).json({ sucess: true, msg: "Project deleted." });
});

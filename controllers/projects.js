const Project = require("../models/Project");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const {
  formatQueryString,
  removeQueryParam
} = require("../utils/queryHelpers");

exports.getProjects = asyncHandler(async (req, res, next) => {
  let query;
  const reqQuery = { ...req.query };

  removeQueryParam(reqQuery, ["select", "sort", "page", "limit"]);

  query = Project.find(JSON.parse(formatQueryString(reqQuery)));

  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const total = await Project.countDocuments();

  query.skip(startIndex).limit(limit);

  const projects = await query;

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }
  if (startIndex > 0) {
    pagination.previous = {
      page: page - 1,
      limit
    };
  }
  res
    .status(200)
    .json({ sucess: true, count: projects.length, pagination, data: projects });
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
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
});

exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!project) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ sucess: true, data: project });
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ sucess: true, msg: "Project deleted." });
});

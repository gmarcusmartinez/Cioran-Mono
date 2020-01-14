const Sprint = require("../models/Sprint");
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

const User = require("../models/User");
const Sprint = require("../models/Sprint");
const Ticket = require("../models/Ticket");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getTickets = asyncHandler(async (req, res, next) => {
  const tickets = await Ticket.find({ sprint: req.params.sprintId }).populate({
    path: "sprint",
    select: "title"
  });

  res.status(200).json({
    success: true,
    count: tickets.length,
    data: tickets
  });
});

exports.getTicket = asyncHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id).populate({
    path: "sprint",
    select: "title"
  });
  if (!ticket) {
    return next(
      new ErrorResponse(`No ticket with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: ticket
  });
});

exports.createTicket = asyncHandler(async (req, res, next) => {
  req.body.sprint = req.params.sprintId;

  const sprint = await Sprint.findById(req.params.sprintId);
  if (!sprint) {
    return next(
      new ErrorResponse(`No sprints with id of ${req.params.sprintId}`, 404)
    );
  }

  if (sprint.projectLead.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not Authorized.`, 401));
  }

  const ticket = await Ticket.create(req.body);

  res.status(200).json({
    success: true,
    data: ticket
  });
});

exports.updateTicket = asyncHandler(async (req, res, next) => {
  let ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return next(
      new ErrorResponse(`No ticket with id of ${req.params.id}`, 404)
    );
  }
  ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: ticket
  });
});

exports.assignTicket = asyncHandler(async (req, res, next) => {
  let ticket = await Ticket.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!ticket) {
    return next(
      new ErrorResponse(`No ticket with id of ${req.params.id}`, 404)
    );
  }

  if (ticket.status === "assigned") {
    return next(
      new ErrorResponse(`This ticket has already been assigned. `, 404)
    );
  }

  ticket.status = "assigned";
  ticket.assignedTo = req.user.id;
  user.assignedTickets.push(ticket._id);

  await ticket.save();
  await user.save();

  res.status(200).json({
    success: true,
    data: ticket
  });
});

exports.markTicketAsComplete = asyncHandler(async (req, res, next) => {
  let ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return next(
      new ErrorResponse(`No ticket with id of ${req.params.id}`, 404)
    );
  }

  let user = await User.findById(req.user.id);

  ticket.status = "complete";
  ticket.dateCompleted = Date.now();

  await ticket.save();
  await user.save();

  res.status(200).json({
    success: true,
    data: ticket
  });
});

exports.deleteTicket = asyncHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return next(
      new ErrorResponse(`No ticket with id of ${req.params.id}`, 404)
    );
  }
  await ticket.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

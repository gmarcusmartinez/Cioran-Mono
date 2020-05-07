const Sprint = require('../models/Sprint');
const Ticket = require('../models/Ticket');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');

exports.getTickets = asyncHandler(async (req, res, next) => {
  const tickets = await Ticket.find({ sprint: req.params.sprintId }).populate({
    path: 'sprint',
    select: 'title',
  });

  res.status(200).json({
    success: true,
    count: tickets.length,
    data: tickets,
  });
});

exports.createTicket = asyncHandler(async (req, res, next) => {
  req.body.sprint = req.params.sprintId;

  const sprint = await Sprint.findById(req.params.sprintId);
  if (!sprint) {
    return next(new ErrorResponse(`Sprint not found.`, 404));
  }

  const ticket = await Ticket.create(req.body);

  res.status(200).json({
    success: true,
    data: ticket,
  });
});

exports.deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return next(new ErrorResponse('Ticket not found.', 400));
  await ticket.remove();
  res.status(201).json({ success: true, data: {} });
});

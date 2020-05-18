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

exports.deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return next(new ErrorResponse('Ticket not found.', 400));
  await ticket.remove();
  res.status(201).json({ success: true, data: {} });
});

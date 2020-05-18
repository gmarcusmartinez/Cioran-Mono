import { Request, Response } from 'express';

import { Sprint } from '../models/Sprint';
import { Ticket } from '../models/Ticket';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { Project } from '../models/Project';

export const getTickets = asyncHandler(async (req: Request, res: Response) => {
  const tickets = await Ticket.find({ sprint: req.params.sprintId });
  res.status(200).send(tickets);
});

export const getTicket = asyncHandler(async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) throw new BadRequestError('Ticket Not Found.');
  res.status(200).send(ticket);
});

export const createTicket = asyncHandler(
  async (req: Request, res: Response) => {
    req.body.sprint = req.params.sprintId;

    const sprint = await Sprint.findById(req.params.sprintId);
    if (!sprint) throw new BadRequestError('Sprint Not Found.');

    const project = await Project.findById(sprint.project);
    if (!project?.team.includes(req.currentUser.id)) {
      throw new NotAuthorizedError();
    }
    const ticket = Ticket.build(req.body);
    ticket.sprint = req.params.sprintId;
    ticket.createdBy = req.currentUser.id;
    await ticket.save();

    const {
      _id,
      title,
      ticketType,
      status,
      priority,
      storyPoints,
      assignedTo,
    } = ticket;
    const ticketSubDoc = {
      _id,
      title,
      ticketType,
      status,
      priority,
      storyPoints,
      assignedTo,
    };

    sprint.tickets.push(ticketSubDoc);
    await sprint.save();

    res.status(201).send(ticket);
  }
);

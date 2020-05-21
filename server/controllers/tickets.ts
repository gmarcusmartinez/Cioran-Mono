import { Request, Response } from 'express';

import { User } from '../models/User';
import { Sprint } from '../models/Sprint';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { validateUnique } from '../utils/validateUnique';
import { validateUnassigned } from '../utils/validateUnassigned';

export const createTicket = asyncHandler(
  async (req: Request, res: Response) => {
    req.body.sprint = req.params.sprintId;

    const sprint = await Sprint.findById(req.params.sprintId);
    if (!sprint) throw new BadRequestError('Sprint Not Found.');

    const project = await Project.findById(sprint.project);
    if (!project) throw new BadRequestError('Project Not Found.');

    if (!project.team.includes(req.currentUser.id)) {
      throw new NotAuthorizedError();
    }
    const ticket = req.body;
    ticket.sprint = req.params.sprintId;
    ticket.createdBy = req.currentUser.id;
    ticket.project = project._id;
    sprint.tickets.push(ticket);
    await sprint.save();

    res.status(201).send(ticket);
  }
);

export const assignTicket = asyncHandler(
  async (req: Request, res: Response) => {
    let sprint = await Sprint.findById(req.body.sprint);
    if (!sprint) throw new BadRequestError('Sprint Not Found.');

    const project = await Project.findById(sprint.project);
    if (!project) throw new BadRequestError('Project Not Found.');

    const user = await User.findById(req.currentUser.id);
    if (!project.team.includes(req.currentUser.id)) {
      throw new NotAuthorizedError();
    }

    const tickets = sprint.tickets;
    let ticket = tickets.find((t) => t._id.toString() === req.params.ticketId);
    if (!ticket) throw new BadRequestError('Ticket Not Found.');

    validateUnassigned(ticket);
    ticket.assignedTo = req.currentUser.id;
    ticket.dateAssigned = new Date(Date.now());

    validateUnique(user!.assignedTickets, req.params.ticketId);

    user!.assignedTickets.push(ticket);
    await sprint.save();
    await user!.save();

    res.status(200).send(ticket);
  }
);

import { Request, Response } from 'express';

import { Sprint } from '../models/Sprint';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';

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

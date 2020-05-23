import { Request, Response } from 'express';

import { User } from '../models/User';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import {
  assign,
  findSprint,
  findTicket,
  validateUnique,
  validateUnassigned,
  createUserSubDoc,
  createSprintSubDoc,
  createProjectSubDoc,
} from '../utils';

export const createTicket = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.body.project);
    if (!project) throw new BadRequestError('Project Not Found.');
    if (!project.team.includes(req.currentUser.id)) {
      throw new NotAuthorizedError();
    }
    const sprint = findSprint(project.sprints, req.params.sprintId);
    const sprintSubDoc = createSprintSubDoc(sprint);
    const projectSubDoc = createProjectSubDoc(project);

    const ticket = req.body;
    ticket.sprint = sprintSubDoc;
    ticket.project = projectSubDoc;
    ticket.createdBy = req.currentUser.id;
    sprint.tickets.push(ticket);

    await project.save();

    res.status(201).send(ticket);
  }
);

export const assignTicket = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.body.project);
    if (!project) throw new BadRequestError('Project Not Found.');
    if (!project.team.includes(req.currentUser.id)) {
      throw new NotAuthorizedError();
    }
    const user = await User.findById(req.currentUser.id);
    const userSubDoc = createUserSubDoc(user!);

    const sprint = findSprint(project.sprints, req.body.sprint);
    const ticket = findTicket(sprint.tickets, req.params.ticketId);

    validateUnassigned(ticket);
    validateUnique(user!.assignedTickets, req.params.ticketId);
    assign(ticket, userSubDoc);

    user!.assignedTickets.push(ticket);
    await project.save();
    await user!.save();

    res.status(200).send(ticket);
  }
);
// export const completeTicket = asyncHandler(
//   async (req: Request, res: Response) => {
//     const project = await Project.findById(req.body.project);
//     if (!project) throw new BadRequestError('Project Not Found.');
//     if (!project.team.includes(req.currentUser.id)) {
//       throw new NotAuthorizedError();
//     }
//     const user = await User.findById(req.currentUser.id);
//     if (!user) throw new NotAuthorizedError();
//  const userSubDoc = createUserSubDoc(user)

//     const sprint = findSprint(project.sprints, req.body.sprint);
//     const ticket = findTicket(sprint.tickets, req.params.ticketId);

//     validateUnassigned(ticket);
//     validateUnique(user!.assignedTickets, req.params.ticketId);

//     user!.assignedTickets.push(ticket);
//     await project.save();
//     await user!.save();

//     res.status(200).send(ticket);
//   }
// );

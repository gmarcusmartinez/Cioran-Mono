import { Request, Response } from 'express';
import { User } from '../models/User';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { find, buildTicket, validate } from '../utils';

export const createTicket = asyncHandler(
  async (req: Request, res: Response) => {
    const user = req.currentUser.id;
    const project = await Project.findById(req.body.projectId);
    if (!project) throw new BadRequestError('Project Not Found.');
    if (!project.team.includes(user)) throw new NotAuthorizedError();

    const sprint = find.findSprint(project.sprints, req.params.sprintId);
    const sprintSubDoc = sprint.createSubDoc();
    const projectSubDoc = project.createSubDoc();

    const ticket = buildTicket(req.body, sprintSubDoc, projectSubDoc, user);

    sprint.tickets.push(ticket);
    await project.save();

    res.status(201).send(ticket);
  }
);

export const assignTicket = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.currentUser.id;
    const { id: ticketId } = req.params;
    const { sprintId, projectId } = req.body;

    const user = await User.findById(userId);
    const project = await Project.findById(projectId);
    if (!project) throw new BadRequestError('Project Not Found.');

    const ticket = find.ticket(project, sprintId, ticketId, userId);

    validate.unassigned(ticket);
    validate.unique(user!.assignedTickets, req.params.ticketId);

    const userSubDoc = user!.createSubDoc();
    ticket.assign(userSubDoc);

    user!.assignedTickets.push(ticket);
    await project.save();
    await user!.save();

    res.status(200).send(ticket);
  }
);
export const unassignTicket = asyncHandler(
  async (req: Request, res: Response) => {
    const { sprintId, projectId } = req.body;
    const { id: ticketId } = req.params;
    const userId = req.currentUser.id;

    const user = await User.findById(userId);
    if (!user) throw new NotAuthorizedError();

    const project = await Project.findById(projectId);
    if (!project) throw new BadRequestError('Project Not Found.');

    const ticket = find.ticket(project, sprintId, ticketId, userId);

    ticket.unassign();
    user.removeFromQ('assignedTickets', ticket);

    await project.save();
    await user!.save();

    res.status(200).send(ticket);
  }
);

export const submitTicketForReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { id: ticketId } = req.params;
    const { sprintId, projectId } = req.body;
    const userId = req.currentUser.id;

    const user = await User.findById(userId);
    if (!user) throw new NotAuthorizedError();

    const project = await Project.findById(projectId);
    if (!project) throw new BadRequestError('Project Not Found.');

    const ticketProjectCopy = find.ticket(project, sprintId, ticketId, userId);
    ticketProjectCopy.submit();

    const ticketUserCopy = find.findTicket(user.assignedTickets, ticketId);
    ticketUserCopy.submit();

    user.removeFromQ('assignedTickets', ticketUserCopy);
    user.submittedTickets.push(ticketUserCopy);

    await project.save();
    await user!.save();
    res.send(user);
  }
);

import { Request, Response } from 'express';

import { Sprint } from '../models/Sprint';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const createSprint = asyncHandler(
  async (req: Request, res: Response) => {
    req.body.project = req.params.projectId;

    const project = await Project.findById(req.params.projectId);
    if (!project) throw new BadRequestError('Project Not Found.');

    if (project.projectOwner.toString() !== req.currentUser.id) {
      throw new NotAuthorizedError();
    }

    const sprint = await Sprint.build(req.body);
    await sprint.save();

    const { _id, title, startDate, endDate } = sprint;
    const sprintSubDoc = { _id, title, startDate, endDate };

    project.sprints.push(sprintSubDoc);
    await project.save();

    res.status(201).send(sprint);
  }
);

export const getSprint = asyncHandler(async (req: Request, res: Response) => {
  const sprint = await Sprint.findById(req.params.id);
  if (!sprint) throw new BadRequestError('Project Not Found.');

  const project = await Project.findById(sprint.project);
  if (!project) throw new BadRequestError('Project Not Found.');
  if (!project.team.includes(req.currentUser.id.toString())) {
    throw new NotAuthorizedError();
  }

  res.status(200).send(sprint);
});

export const updateSprint = asyncHandler(
  async (req: Request, res: Response) => {
    let sprint = await Sprint.findById(req.params.id);
    if (!sprint) throw new BadRequestError('Sprint Not Found.');

    const project = await Project.findById(sprint.project);
    if (!project) throw new BadRequestError('Project Not Found.');

    if (project.projectOwner.toString() !== req.currentUser.id) {
      throw new NotAuthorizedError();
    }

    sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).send(sprint);
  }
);

export const deleteSprint = asyncHandler(
  async (req: Request, res: Response) => {
    const sprint = await Sprint.findById(req.params.id);
    if (!sprint) throw new BadRequestError('Sprint Not Found.');

    let project = await Project.findById(sprint.project);
    if (!project) throw new BadRequestError('Project Not Found.');

    if (project.projectOwner.toString() !== req.currentUser.id) {
      throw new NotAuthorizedError();
    }
    const updatedSprints = project.sprints.filter(
      (s) => s._id.toString() !== sprint._id.toString()
    );

    project = await Project.findByIdAndUpdate(
      sprint.project,
      { sprints: updatedSprints },
      {
        new: true,
        runValidators: true,
      }
    );

    await sprint.remove();

    res.status(200).send('Sprint removed');
  }
);

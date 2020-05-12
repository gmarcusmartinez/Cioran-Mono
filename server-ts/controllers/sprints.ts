import { Request, Response } from 'express';

import { Sprint } from '../models/Sprint';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';

export const createSprint = asyncHandler(
  async (req: Request, res: Response) => {
    req.body.project = req.params.projectId;

    const project = await Project.findById(req.params.projectId);
    if (!project) throw new BadRequestError('Project Not Found.');

    const sprint = await Sprint.build(req.body);
    await sprint.save();

    const { _id, title, startDate, endDate } = sprint;
    const sprintSubDoc = { _id, title, startDate, endDate };

    project.sprints.push(sprintSubDoc);
    await project.save();

    res.status(201).send(sprint);
  }
);

export const deleteSprint = asyncHandler(
  async (req: Request, res: Response) => {
    const sprint = await Sprint.findById(req.params.id);
    if (!sprint) throw new BadRequestError('Sprint Not Found.');

    let project = await Project.findById(sprint.project);
    if (!project) throw new BadRequestError('Project Not Found.');

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

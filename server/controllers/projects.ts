import { Request, Response } from 'express';

import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await Project.find();
  res.status(200).send(projects);
});

export const getProject = asyncHandler(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new BadRequestError('Project Not Found.');
  if (!project.team.includes(req.currentUser.id.toString())) {
    throw new NotAuthorizedError();
  }
  res.status(200).send(project);
});

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = Project.build(req.body);
    project.projectOwner = req.currentUser.id;
    project.team.push(req.currentUser.id);

    await project.save();
    res.status(201).send(project);
  }
);

export const updateProject = asyncHandler(
  async (req: Request, res: Response) => {
    let project = await Project.findById(req.params.id);

    if (!project) throw new BadRequestError('Project Not Found.');
    if (project.projectOwner.toString() !== req.currentUser.id) {
      throw new NotAuthorizedError();
    }

    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send({ sucess: true, data: project });
  }
);

export const deleteProject = asyncHandler(
  async (req: Request, res: Response) => {
    let project = await Project.findById(req.params.id);

    if (!project) throw new BadRequestError('Project Not Found.');
    if (project.projectOwner.toString() !== req.currentUser.id) {
      throw new NotAuthorizedError();
    }

    project.remove();
    res.status(200).send({});
  }
);

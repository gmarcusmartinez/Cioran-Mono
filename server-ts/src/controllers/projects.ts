import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { asyncHandler } from '../middlewares/async';

export const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await Project.find();
  res.status(200).send(projects);
});

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, slug } = req.body;
    const project = Project.build({ title, slug });
    await project.save();
    res.status(201).send(project);
  }
);

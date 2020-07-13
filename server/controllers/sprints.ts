import { Request, Response } from "express";

import { Project } from "../models/Project";
import { asyncHandler } from "../middlewares/async";
import { BadRequestError } from "../errors/bad-request-error";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const createSprint = asyncHandler(
  async (req: Request, res: Response) => {
    req.body.project = req.params.projectId;

    const project = await Project.findById(req.params.projectId);
    if (!project) throw new BadRequestError("Project Not Found.");

    if (project.projectOwner.toString() !== req.currentUser._id) {
      throw new NotAuthorizedError();
    }

    const sprint = req.body;
    project.sprints.push(sprint);
    await project.save();

    res.status(201).send(sprint);
  },
);
export const getSprint = asyncHandler(async (req: Request, res: Response) => {
  const sprintId = req.params.id;

  const project = await Project.findById(req.params.projectId);
  if (!project) throw new BadRequestError("Project Not Found.");

  const sprint = project.sprints.find((s) => s._id.toString() === sprintId);
  if (!sprint) throw new BadRequestError("Sprint Not Found.");

  res.status(201).send(sprint);
});

import { UserDoc } from '../models/User';
import { SprintDoc } from '../models/Sprint';
import { ProjectDoc } from '../models/Project';
import { UserSubDoc, ProjectSubDoc, SprintSubDoc } from '../models/Ticket';

export const createSprintSubDoc = (sprint: SprintDoc): SprintSubDoc => {
  const { _id, endDate } = sprint;
  const sprintSubDoc = { _id, endDate };
  return sprintSubDoc;
};
export const createProjectSubDoc = (project: ProjectDoc): ProjectSubDoc => {
  const { _id, slug } = project;
  const projectSubDoc = { _id, slug };
  return projectSubDoc;
};
export const createUserSubDoc = (user: UserDoc): UserSubDoc => {
  const { _id, name, photo } = user;
  const userSubDoc = { _id, name, photo };
  return userSubDoc;
};

import { Router } from 'express';

import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '../middlewares/current-user';
import { validateRequest } from '../middlewares/validate-request';
import { createProjectValidation } from '../validation/project-validation';

import { getProjects, createProject } from '../controllers/projects';

const projectRouter = Router();
projectRouter.route('/').get(currentUser, requireAuth, getProjects);
projectRouter
  .route('/')
  .post(
    currentUser,
    requireAuth,
    createProjectValidation,
    validateRequest,
    createProject
  );

export { projectRouter };

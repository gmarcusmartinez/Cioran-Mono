import { Router } from 'express';

import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '../middlewares/current-user';
import { validateRequest } from '../middlewares/validate-request';
import { createProjectValidation } from '../validation/project-validation';

import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projects';

const router = Router();
router.route('/').get(currentUser, requireAuth, getProjects);

router
  .route('/')
  .post(
    currentUser,
    requireAuth,
    createProjectValidation,
    validateRequest,
    createProject
  );
router
  .route('/:id')
  .get(currentUser, requireAuth, getProject)
  .put(currentUser, requireAuth, updateProject)
  .delete(currentUser, requireAuth, deleteProject);
export { router as projectRouter };

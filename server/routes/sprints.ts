import { Router } from 'express';

import { ticketRouter } from './tickets';
import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '../middlewares/current-user';
import { validateRequest } from '../middlewares/validate-request';
import { createSprint } from '../controllers/sprints';
import { createSprintValidation } from '../validation/sprint-validation';

const router = Router({ mergeParams: true });

router.use('/:sprintId/tickets', ticketRouter);

router
  .route('/')
  .post(
    currentUser,
    requireAuth,
    createSprintValidation,
    validateRequest,
    createSprint
  );

export { router as sprintRouter };

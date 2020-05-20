import { Router } from 'express';

import { ticketRouter } from './tickets';
import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '../middlewares/current-user';
import { validateRequest } from '../middlewares/validate-request';
import { createSprint, getSprint } from '../controllers/sprints';
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
router.route('/:id').get(currentUser, requireAuth, getSprint);

export { router as sprintRouter };

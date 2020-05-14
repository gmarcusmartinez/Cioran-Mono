import { Router } from 'express';

import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '../middlewares/current-user';
import { validateRequest } from '../middlewares/validate-request';
import { createSprint, deleteSprint } from '../controllers/sprints';
import { createSprintValidation } from '../validation/sprint-validation';
import { ticketRouter } from './tickets';

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
router.route('/:id').delete(currentUser, requireAuth, deleteSprint);

export { router as sprintRouter };

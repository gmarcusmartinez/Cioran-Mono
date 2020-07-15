import { Router } from 'express';
import {
  createTicket,
  assignTicket,
  unassignTicket,
  submitTicketForReview,
  markTicketAsComplete,
} from '../controllers/tickets';
import { createTicketValidation } from '../validation/ticket-validation';
import { validateRequest } from '../middlewares/validate-request';

import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';

const router = Router({ mergeParams: true });

router
  .route('/')
  .post(currentUser, createTicketValidation, validateRequest, createTicket);

router.route('/:id/assign').put(currentUser, requireAuth, assignTicket);
router.route('/:id/unassign').put(currentUser, requireAuth, unassignTicket);
router
  .route('/:id/submit')
  .put(currentUser, requireAuth, submitTicketForReview);
router
  .route('/:id/complete')
  .put(currentUser, requireAuth, markTicketAsComplete);

export { router as ticketRouter };

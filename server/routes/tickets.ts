import { Router } from 'express';
import {
  createTicket,
  assignTicket,
  unassignTicket,
  submitTicketForReview,
} from '../controllers/tickets';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';

const router = Router({ mergeParams: true });

router.route('/').post(currentUser, createTicket);
router.route('/:id/assign').put(currentUser, requireAuth, assignTicket);
router.route('/:id/unassign').put(currentUser, requireAuth, unassignTicket);

router
  .route('/:id/submit')
  .put(currentUser, requireAuth, submitTicketForReview);

export { router as ticketRouter };

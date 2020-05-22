import { Router } from 'express';
import { createTicket, assignTicket } from '../controllers/tickets';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';

const router = Router({ mergeParams: true });

router.route('/').post(currentUser, createTicket);
router.route('/:ticketId/assign').put(currentUser, requireAuth, assignTicket);

export { router as ticketRouter };

import { Router } from 'express';
import { createTicket, assignTicket } from '../controllers/tickets';
import { currentUser } from '../middlewares/current-user';
const router = Router({ mergeParams: true });

router.route('/').post(currentUser, createTicket);
router.route('/:ticketId/assign').put(currentUser, assignTicket);

export { router as ticketRouter };

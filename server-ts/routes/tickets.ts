import { Router } from 'express';
import { getTickets, createTicket, getTicket } from '../controllers/tickets';
import { currentUser } from '../middlewares/current-user';
const router = Router({ mergeParams: true });

router.route('/').get(getTickets).post(currentUser, createTicket);

router.route('/:id').get(getTicket);

export { router as ticketRouter };

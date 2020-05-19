import { Router } from 'express';
import { createTicket } from '../controllers/tickets';
import { currentUser } from '../middlewares/current-user';
const router = Router({ mergeParams: true });

router.route('/').post(currentUser, createTicket);

export { router as ticketRouter };

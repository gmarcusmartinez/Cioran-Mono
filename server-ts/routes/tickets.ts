import { Router } from 'express';
import { getTickets } from '../controllers/tickets';

const router = Router({ mergeParams: true });

router.route('/').get(getTickets)

export { router as ticketRouter };

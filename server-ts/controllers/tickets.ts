import { Request, Response } from 'express';

import { Ticket } from '../models/Ticket';
import { asyncHandler } from '../middlewares/async';

export const getTickets = asyncHandler(async (req: Request, res: Response) => {
  const tickets = await Ticket.find({ sprint: req.params.sprintId });
  res.status(200).send(tickets);
});

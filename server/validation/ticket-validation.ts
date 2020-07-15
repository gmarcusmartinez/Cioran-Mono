import { body } from 'express-validator';

export const createTicketValidation = [
  body('title').exists().withMessage('Ticket title required.'),
  body('ticketType').exists().withMessage('Ticket type required.'),
  body('storyPoints').exists().withMessage('Story Points value required'),
];

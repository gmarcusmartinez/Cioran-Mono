import { TicketDoc } from '../models/Ticket';
import { BadRequestError } from '../errors/bad-request-error';

export const validateUnassigned = (doc: TicketDoc) => {
  if (doc.assignedTo !== null) {
    throw new BadRequestError('Ticket has already been assigned.');
  } else {
    return doc;
  }
};

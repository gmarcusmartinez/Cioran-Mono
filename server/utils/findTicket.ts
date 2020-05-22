import { TicketDoc } from '../models/Ticket';
import { BadRequestError } from '../errors/bad-request-error';

export const findTicket = (arr: TicketDoc[], id: string): TicketDoc => {
  const ticket = arr.find((el: any) => el._id.toString() === id);
  if (!ticket) throw new BadRequestError('Ticket Not Found.');
  return ticket;
};

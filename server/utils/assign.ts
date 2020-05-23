import { TicketDoc, UserSubDoc } from '../models/Ticket';

export const assign = (doc: TicketDoc, user: UserSubDoc) => {
  doc.assignedTo = user;
  doc.dateAssigned = new Date(Date.now());
  doc.status = 'assigned';
};

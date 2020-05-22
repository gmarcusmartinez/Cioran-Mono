import { TicketDoc } from '../models/Ticket';

export const assign = (doc: TicketDoc, id: string) => {
  doc.assignedTo = id;
  doc.dateAssigned = new Date(Date.now());
  doc.status = 'assigned';
};

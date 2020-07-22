import { ITicket } from 'interfaces';

export const setCurrentTickets = (tickets: ITicket[], ticketPage: number) => {
  const itemsPerPage = 12;
  const lastIndex = ticketPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  return tickets.slice(firstIndex, lastIndex);
};

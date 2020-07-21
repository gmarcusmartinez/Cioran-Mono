export const setCurrentTickets = (
  tickets: any[],
  ticketPage: number,
  itemsPerPage: number
) => {
  const lastIndex = ticketPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  return tickets.slice(firstIndex, lastIndex);
};

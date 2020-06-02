interface ContainsStoryPoints {
  storyPoints: number;
}

export const calculateStoryPoints = (arr: ContainsStoryPoints[]): number => {
  let total = 0;
  arr.forEach((el) => (total += +el.storyPoints));
  return total;
};

export const firstNameOnly = (name: string | null): string => {
  if (!name) return '';
  return name.split(' ')[0];
};

export const setCurrentTickets = (
  tickets: any[],
  ticketPage: number,
  itemsPerPage: number
) => {
  const lastIndex = ticketPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  return tickets.slice(firstIndex, lastIndex);
};

import { TicketDoc } from '../../models/Ticket';
import { SprintDoc } from '../../models/Sprint';
import { ProjectDoc } from '../../models/Project';
import { BadRequestError } from '../../errors/bad-request-error';
import { NotAuthorizedError } from '../../errors/not-authorized-error';

const findSprint = (arr: SprintDoc[], id: string): SprintDoc => {
  const sprint = arr.find((el: any) => el._id.toString() === id);
  if (!sprint) throw new BadRequestError('Sprint Not Found.');
  return sprint;
};

const findTicket = (ticketArray: TicketDoc[], id: string): TicketDoc => {
  const ticket = ticketArray.find((t: any) => t._id.toString() === id);
  if (!ticket) throw new BadRequestError('Ticket Not Found.');
  return ticket;
};

const ticket = (
  project: ProjectDoc,
  sprintId: string,
  ticketId: string,
  userId: string
) => {
  if (!project.team.includes(userId)) throw new NotAuthorizedError();

  const sprint = findSprint(project.sprints, sprintId);
  if (!sprint) throw new BadRequestError('Sprint Not Found.');

  const ticket = findTicket(sprint.tickets, ticketId);
  if (!ticket) throw new BadRequestError('Ticket Not Found.');
  return ticket;
};

export const find = {
  findTicket,
  findSprint,
  ticket,
};

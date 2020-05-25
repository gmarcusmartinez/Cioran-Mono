import { TicketDoc, SprintSubDoc, ProjectSubDoc } from '../../models/Ticket';

export const buildTicket = (
  doc: TicketDoc,
  sprint: SprintSubDoc,
  project: ProjectSubDoc,
  id: string
) => {
  doc.sprint = sprint;
  doc.project = project;
  doc.createdBy = id;
  return doc;
};

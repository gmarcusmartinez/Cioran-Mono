import { TicketDoc } from '../../models/Ticket';
import { SprintSubDoc } from '../../models/Sprint';
import { ProjectSubDoc } from '../../models/Project';

export const buildTicket = (
  doc: TicketDoc,
  sprint: SprintSubDoc,
  project: ProjectSubDoc,
  id: string
) => {
  doc.sprint = sprint;
  doc.project = project;
  doc.createdBy = id;
  doc.status = 'unassigned';
  return doc;
};

import { TicketDoc } from '../../models/Ticket';
import { BadRequestError } from '../../errors/bad-request-error';

export const unassigned = (doc: TicketDoc) => {
  if (doc.assignedTo !== null) {
    throw new BadRequestError('Ticket has already been assigned.');
  } else {
    return doc;
  }
};

export const unique = (arr: TicketDoc[], id: string) => {
  let isDuplicate = arr.find((el: any) => el._id.toString() === id);
  if (isDuplicate) {
    throw new BadRequestError(
      'You have already assigned this ticket to your Que.'
    );
  } else {
    return arr;
  }
};

export const validate = {
  unique,
  unassigned,
};

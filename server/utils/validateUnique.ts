import { TicketDoc } from '../models/Ticket';
import { BadRequestError } from '../errors/bad-request-error';

export const validateUnique = (arr: TicketDoc[], id: string) => {
  let isDuplicate = arr.find((el: any) => el._id.toString() === id);
  if (isDuplicate) {
    throw new BadRequestError(
      'You have already assigned this ticket to your Que.'
    );
  } else {
    return arr;
  }
};

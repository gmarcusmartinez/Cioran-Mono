import { BadRequestError } from '../errors/bad-request-error';
import { SprintDoc } from '../models/Sprint';

export const findSprint = (arr: SprintDoc[], id: string): SprintDoc => {
  const sprint = arr.find((el: any) => el._id.toString() === id);
  if (!sprint) throw new BadRequestError('Sprint Not Found.');
  return sprint;
};

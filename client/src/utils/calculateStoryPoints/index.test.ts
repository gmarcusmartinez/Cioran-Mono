import { calculateStoryPoints } from '.';

const dummyTickets = [{ storyPoints: 1 }, { storyPoints: 3 }];

describe('calculateStoryPoints', () => {
  test('returns 4 for mock Ticket array ', () => {
    const res = calculateStoryPoints(dummyTickets);
    expect(res).toBe(4);
  });
});

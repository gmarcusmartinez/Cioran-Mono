export const ticketTypeOptions = [
  { text: 'task' },
  { text: 'feature' },
  { text: 'bug' },
  { text: 'tests' },
];
export const storyPointOptions = [
  { text: 1 },
  { text: 2 },
  { text: 3 },
  { text: 5 },
  { text: 8 },
  { text: 13 },
];
export const priorityOptions = [
  { text: 'low' },
  { text: 'medium' },
  { text: 'high' },
];
export const formInitialState = {
  title: '',
  ticketType: 'task',
  storyPoints: 1,
  description: '',
  priority: 'low',
  projectId: '',
};

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

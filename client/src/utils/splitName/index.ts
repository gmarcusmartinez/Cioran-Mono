export const splitName = (name: string | null): string => {
  if (!name) return '';
  return name.split(' ')[0];
};

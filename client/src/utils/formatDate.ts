export const formatDate = (d: Date) => {
  return d.toString().split('').slice(2, 10).join('');
};

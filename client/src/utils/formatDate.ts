export const formatDate = (d: Date | undefined): string => {
  if (!d) return '';

  let shortDate = trimDate(d);
  const year = shortDate[0];
  const month = formatMonth(+shortDate[1] - 1);
  const date = +shortDate[2];

  return `${month}/${prefixZero(date)}/${year}`;
};

const trimDate = (d: Date): string[] => {
  return d.toString().split('').slice(0, 10).join('').split('-');
};

const formatMonth = (idx: number): string => {
  const months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
  return months[idx];
};

const prefixZero = (d: number) => {
  if (d <= 9) return `0${d}`;
  return d;
};

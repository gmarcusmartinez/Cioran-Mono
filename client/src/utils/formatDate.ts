export const formatDate = (d: Date) => {
  let shortDate = trimDate(d);
  const year = shortDate[0];
  const month = formatMonth(+shortDate[1] - 1);

  const date = +shortDate[2].split('')[1];
  const day = formatSuffix(date);

  return `${month} ${day} ${year}`;
};

const trimDate = (d: Date): string[] => {
  return d.toString().split('').slice(2, 10).join('').split('-');
};

const formatMonth = (idx: number): string => {
  const months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
  return months[idx];
};

const formatSuffix = (date: number): string => {
  let day;
  if (date === 1) day = `${date}st`;
  else if (date === 2) day = `${date}nd`;
  else if (date === 3) day = `${date}rd`;
  else day = `${date}th`;
  return day;
};

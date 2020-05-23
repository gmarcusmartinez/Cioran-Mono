export const formatDate = (d: Date) => {
  let shortDate = d.toString().split('').slice(2, 10).join('').split('-');
  const months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');

  const year = shortDate[0];
  const month = months[+shortDate[1] - 1];
  const date = +shortDate[2].split('')[1];

  let day;
  if (+date === 0 || +date > 3) {
    day = `${shortDate[2]}th`;
  } else if (+date === 1) {
    day = `${shortDate[2]}st`;
  } else if (+date === 2) {
    day = `${shortDate[2]}nd`;
  } else {
    day = `${shortDate[2]}rd`;
  }
  return `${month} ${day} ${year}`;
};

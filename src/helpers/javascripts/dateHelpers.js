import DateFormat from 'dateformat';

export const handleDate = (date) => {
  const newDate = new Date(date);
  return DateFormat((newDate), 'dddd, mmmm dS, yyyy, hh:MM TT');
};

export const handleDateWithoutHours = (date) => {
  const newDate = new Date(date);
  return DateFormat((newDate), 'dddd, mmmm dS, yyyy');
};

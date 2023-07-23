interface formattedDate {
  day: string;
  month: string;
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const formatDate: (date: string) => formattedDate = (date: string) => {
  const event = new Date(date);

  return {
    day: event.getDate().toString(),
    month: monthNames[event.getMonth()],
  };
};

export default formatDate;

export const weekDayCreator = (number: number): string => {
  switch (number) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "";
  }
};

export const getDateHours = (date: Date | number) => {
  return new Date(date).setHours(0, 0, 0, 0);
};

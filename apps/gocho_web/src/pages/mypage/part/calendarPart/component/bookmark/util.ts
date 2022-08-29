interface getBetweenDate {
  (endDate: number): number;
}

export const getBetweenDate: getBetweenDate = (endDate) => {
  const endTime = new Date(endDate).getTime();

  const betweenTime = endTime - new Date().getTime();

  const betweenDay = betweenTime / 1000 / 60 / 60 / 24;

  return Math.round(betweenDay);
};

export const getDateHours = (date: Date | number) => {
  return new Date(date).setHours(0, 0, 0, 0);
};

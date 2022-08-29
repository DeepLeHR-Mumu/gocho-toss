interface setDdayValueCreatorDef {
  (endTime: number): string;
}

export const dDayCalculator: setDdayValueCreatorDef = (endTime) => {
  const endDate = new Date(endTime);
  const endTimeNoHours = new Date(endDate).setHours(0, 0, 0, 0);
  const todayDateNoHours = new Date().setHours(0, 0, 0, 0);

  const dDay = Math.floor(
    (endTimeNoHours - new Date(new Date().setHours(0, 0, 0, 0)).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (endDate.getFullYear() === 9999) {
    return "상시공고";
  }
  if (
    (endDate.getHours() === 0 &&
      endDate.getMinutes() === 0 &&
      endDate.getSeconds() === 0 &&
      endDate.getMilliseconds() === 0 &&
      endTimeNoHours === todayDateNoHours) ||
    (todayDateNoHours === endTimeNoHours && endTime > new Date().getTime())
  ) {
    return "D-DAY";
  }
  if (endTime < new Date().getTime()) {
    return "만료공고";
  }
  return `D-${dDay}`;
};

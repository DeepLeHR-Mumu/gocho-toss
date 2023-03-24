import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

interface setDdayValueCreatorDef {
  (endTime: number): string;
}

export const dDayCalculator: setDdayValueCreatorDef = (endTime) => {
  const endDate = dayjs(endTime);
  const endTimeNoHours = new Date(endTime).setHours(0, 0, 0, 0);
  dayjs.extend(isToday);

  const dDay = Math.floor(
    (endTimeNoHours - new Date(new Date().setHours(0, 0, 0, 0)).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (endDate.year() === 9999) {
    return "상시채용";
  }
  if (!endDate.isAfter(dayjs().valueOf())) {
    return "만료";
  }
  if (endDate.isToday()) {
    return "D-DAY";
  }

  return `D-${dDay}`;
};

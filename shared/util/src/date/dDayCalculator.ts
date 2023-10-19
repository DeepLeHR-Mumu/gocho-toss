import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

interface setDdayValueCreatorDef {
  (endTime: string): string;
}

export const dDayCalculator: setDdayValueCreatorDef = (endTime) => {
  dayjs.extend(utc); // timezone이 utc 플러그인에 의존성 가짐
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Seoul");
  dayjs.locale("ko");

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
    return "오늘마감";
  }

  return `D-${dDay}`;
};

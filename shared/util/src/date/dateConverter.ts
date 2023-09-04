import dayjs from "dayjs";
import "dayjs/locale/ko";

interface changeDateCreatorDef {
  (_date: string): {
    dateWithTime: string;
    dateWithDay: string;
    date: string;
    year: string;
  };
}

export const dateConverter: changeDateCreatorDef = (_date) => {
  dayjs.locale("ko");

  const day = dayjs(_date);
  const date = day.format("YYYY.MM.DD");
  const dateWithTime = day.format("YYYY-MM-DD HH:mm");
  const dateWithDay = day.format("YYYY.MM.DD (ddd)");
  const year = day.format("YYYY");
  return { dateWithTime, dateWithDay, date, year };
};

import dayjs from "dayjs";
import "dayjs/locale/ko";

interface changeDateCreatorDef {
  (_date: string): {
    dateWithTime: string;
    dateWithDay: string;
    date: string;
    dueDate: string;
    year: string;
  };
}

export const dateConverter: changeDateCreatorDef = (_date) => {
  dayjs.locale("ko");

  const day = dayjs(_date);
  const date = day.format("YYYY.MM.DD");
  const dateWithTime = day.format("YYYY-MM-DD HH:mm");
  const dateWithDay = day.format("YYYY.MM.DD (ddd)");
  const dueDate = day.format("YYYY.MM.DD ddd요일까지");
  const year = day.format("YYYY");
  return { dateWithTime, dateWithDay, date, dueDate, year };
};

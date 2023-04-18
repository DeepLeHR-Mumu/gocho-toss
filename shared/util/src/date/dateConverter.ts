import dayjs from "dayjs";

interface changeDateCreatorDef {
  (_date: string): {
    dateWithTime: string;
    date: string;
    year: string;
  };
}

export const dateConverter: changeDateCreatorDef = (_date) => {
  const day = dayjs(_date);
  const date = day.format("YYYY.MM.DD");
  const dateWithTime = day.format("YYYY-MM-DD HH:mm:ss");
  const year = day.format("YYYY");
  return { dateWithTime, date, year };
};

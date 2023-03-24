interface changeDateCreatorDef {
  (_date: number): {
    year: number;
    month: number;
    date: number;
    hour: string;
    minute: string;
  };
}

export const dateConverter: changeDateCreatorDef = (_date) => {
  const pureHour = new Date(_date).getHours();
  const pureMinute = new Date(_date).getMinutes();

  const year = new Date(_date).getFullYear();
  const month = new Date(_date).getMonth() + 1;
  const date = new Date(_date).getDate();
  const hour = pureHour < 10 ? `0${pureHour}` : pureHour.toString();
  const minute = pureMinute < 10 ? `0${pureMinute}` : pureMinute.toString();

  return { year, month, date, hour, minute };
};

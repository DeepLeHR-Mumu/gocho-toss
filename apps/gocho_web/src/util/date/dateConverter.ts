interface changeDateCreatorDef {
  (_date: number): {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
  };
}

export const dateConverter: changeDateCreatorDef = (_date) => {
  const year = new Date(_date).getFullYear();
  const month = new Date(_date).getMonth() + 1;
  const date = new Date(_date).getDate();
  const hour = new Date(_date).getHours();
  const minute = new Date(_date).getMinutes();

  return { year, month, date, hour, minute };
};

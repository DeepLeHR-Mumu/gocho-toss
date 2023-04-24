import dayjs from "dayjs";

import { DDayBooleanReturnDef } from "./type";

export const dDayBooleanReturn: DDayBooleanReturnDef = (endTime) => {
  const currentTime = dayjs(new Date(), "YYYY-MM-DD HH:mm:ss");
  return currentTime.isAfter(endTime);
};

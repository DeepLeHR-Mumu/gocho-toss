import { DDayBooleanReturnDef } from "./type";

export const dDayBooleanReturn: DDayBooleanReturnDef = (endTime) => {
  if (endTime < new Date().getTime()) {
    return true;
  }
  return false;
};

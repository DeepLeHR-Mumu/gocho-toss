import dayjs from "dayjs";
import { ParsedUrlQuery } from "querystring";

export const isStringArray = (param: unknown): param is string[] => {
  if (!Array.isArray(param)) {
    return false;
  }

  return param.every((item) => typeof item === "string");
};

export const isQueryString = <T extends keyof ParsedUrlQuery>(query: ParsedUrlQuery[T]): query is string => {
  if (query) {
    if (Array.isArray(query)) {
      return false;
    }
    return true;
  }

  return false;
};

export const copyToClipboard = (target: string) => navigator.clipboard.writeText(target);

export const YYMMToDate = (yymm: string) => {
  const a = dayjs(yymm);
  return [a.year(), a.month() + 1 < 10 ? `0${a.month() + 1}` : a.month() + 1, "01"].join("-");
};

export const dateToYYMM = (date: string) => {
  const a = dayjs(date);
  return [a.year(), a.month() + 1 < 10 ? `0${a.month() + 1}` : a.month() + 1].join("");
};

export const dateToYYDOTMM = (date: string) => {
  const a = dayjs(date);
  return [a.year(), a.month() + 1 < 10 ? `0${a.month() + 1}` : a.month() + 1].join(".");
};

import { ParsedUrlQuery } from "querystring";

export const isInvalidDate = (date: Date) => {
  return Number.isNaN(date.getTime());
};

export const isExpired = (date: Date) => {
  const today = new Date();

  return date.getTime() < today.getTime();
};

export const getDayUntilExpiry = (expiryTime: Date) => {
  const targetExpiryTime = new Date(expiryTime);
  targetExpiryTime.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timestampUntilExpiry = targetExpiryTime.getTime() - today.getTime();

  return Math.floor(timestampUntilExpiry / 1000 / 60 / 60 / 24);
};

export const isStringArray = (param: unknown): param is string[] => {
  if (!Array.isArray(param)) {
    return false;
  }

  return param.every((item) => {
    return typeof item === "string";
  });
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

export const copyToClipboard = (target: string) => {
  return navigator.clipboard.writeText(target);
};

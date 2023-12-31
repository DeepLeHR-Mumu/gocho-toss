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

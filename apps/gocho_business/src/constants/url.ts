export const INTERNAL_URL = {
  HOME: "/",
  MY_PAGE: "/mypage",
  JD_LIST: "/jd/list",
  JD_UPLOAD: "/jd/upload",
  JD_EDIT: (jdIndex: number) => `/jd/${jdIndex}/edit`,
  FACTORY_LIST: "/factory/list",
  COMPANY_EDIT: "/company/edit",
  RECRUITER_LIST: "/recruiter/list",
  HELP: "/help",
  NOT_FOUND: "/404",
  UNKNOWN_ERROR: "/500",
  LOGIN: "/login",
} as const;

export const POSTCODE_SCRIPT_URL = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

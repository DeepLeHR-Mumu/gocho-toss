export const linkObj = {
  DESKTOP_BASE_URL: "http://localhost:3000",
  MOBILE_BASE_URL: "http://localhost:3001",
  JOBS_LIST_URL: "/jd/list",
  JOBS_DETAIL_URL: "/jd/detail",
  JOBS_EXPLIST_URL: "/jd/explist",
  COMPANY_DETAIL_URL: (companyIndex: number) => {
    return `/company/${companyIndex}/detail`;
  },
  COMPANY_JD_URL: (companyIndex: number) => {
    return `/company/${companyIndex}/jd`;
  },
  COMMUNITY_POSTING_LIST_URL: "/community/posting/list",
  COMMUNITY_POSTING_DETAIL_URL: "/community/posting/detail",
  COMMUNITY_TIPS_LIST_URL: "/community/tip/list",
  COMMUNITY_TIPS_DETAIL_URL: "/community/tip/detail",
  INTERVIEW_REVIEW: "/review",
  DATALAB_DETAIL: "/datalab/detail",
  SPEC_LIST_URL: "/datalab/spec/list",
  SPEC_DETAIL_URL: "/datalab/spec/detail",
  SPEC_REGISTER_URL: "/datalab/spec/register",
  SPEC_MY_URL: "/datalab/spec/my",
  MYPAGE_URL: "/mypage",
  SEARCH_URL: "/search",
  TOS_URL: "/term-of-service",
  PRIVACY_URL: "/privacy",
};

export const businessLinkObj = {
  BASE_URL: "http://localhost:3000",
  HOME: "/",
  MY_PAGE: "/mypage",
  JD_LIST: "/jd/list",
  JD_UPLOAD: "/jd/upload",
  JD_EDIT: (jdIndex: number) => {
    return `/jd/${jdIndex}/edit`;
  },
  FACTORY_LIST: "/factory/list",
  COMPANY_EDIT: "/company/edit",
  RECRUITER_LIST: "/recruiter/list",
  HELP: "/help",
  NOT_FOUND: "/404",
  UNKNOWN_ERROR: "/500",
  LOGIN: "/login",
};

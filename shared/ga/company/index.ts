import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const companyInfoFunnelEvent = (id: number) => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_INFO) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_INFO);
  ReactGA.event("enter_company_info", { prev: funnel, company_id: id });
};

export const companyJdFunnelEvent = (id: number) => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_JD) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_JD);
  ReactGA.event("enter_company_jd", { prev: funnel, company_id: id });
};

export const companyBookmarkEvent = (id: number) => {
  ReactGA.event("bookmark_company", { company_id: id });
};

import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const companyHomeFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_HOME) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_HOME);
  ReactGA.event(FUNNEL.COMPANY_HOME, { prev: funnel });
};

export const companyListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_LIST);
  ReactGA.event(FUNNEL.COMPANY_LIST, { prev: funnel });
};

export const companyDetailFunnelEvent = (id: number) => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_DETAIL) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_DETAIL);
  ReactGA.event(FUNNEL.COMPANY_DETAIL, { prev: funnel, company_id: id });
};

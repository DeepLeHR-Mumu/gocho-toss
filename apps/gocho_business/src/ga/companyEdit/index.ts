import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const companyEditFailEvent = (tryCount: number) => {
  ReactGA.event("company_edit_fail", { try_count: tryCount });
};

export const companyEditConfirmEvent = () => {
  ReactGA.event("company_edit_confirm");
};

export const companyEditDoneEvent = () => {
  ReactGA.event("company_edit");
};

export const companyEditPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_EDIT_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_EDIT_PAGE);
  ReactGA.event("company_edit_enter", { prev: funnel });
};

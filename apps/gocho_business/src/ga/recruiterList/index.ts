import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const recruiterListPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.RECRUITER_LIST_PAGE) {
    return;
  }
  ReactGA.event("enter_recruiter_list", { prev: funnel });
  sessionStorage.setItem("funnel", FUNNEL.RECRUITER_LIST_PAGE);
};

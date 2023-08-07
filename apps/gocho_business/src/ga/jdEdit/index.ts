import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const jdEditExitEvent = () => {
  ReactGA.event("jd_edit_bounce_confirm");
};

export const jdEditExitDoneEvent = () => {
  ReactGA.event("jd_edit_bounce");
};

export const jdEditFailEvent = (tryCount: number) => {
  ReactGA.event("jd_edit_fail", { try_count: tryCount });
};

export const jdEditConfirmEvent = () => {
  ReactGA.event("jd_edit_confirm");
};

export const jdEditDoneEvent = () => {
  ReactGA.event("jd_edit");
};

export const jdEditPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_EDIT_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_EDIT_PAGE);
  ReactGA.event("jd_edit_enter", { prev: funnel });
};

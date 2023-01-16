import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const jdCloseButtonEvent = (jdId: number) => {
  ReactGA.event("jd_close_button_click", { jd_id: jdId });
};

export const jdDeleteButtonEvent = (jdId: number) => {
  ReactGA.event("jd_delete_button_click", { jd_id: jdId });
};

export const jdEditButtonEvent = (jdId: number) => {
  ReactGA.event("jd_edit_button_click", { jd_id: jdId });
};

export const jdCloseDoneEvent = (jdId: number) => {
  ReactGA.event("jd_close", { jd_id: jdId });
};

export const jdDeleteDoneEvent = (jdId: number) => {
  ReactGA.event("jd_delete", { jd_id: jdId });
};

export const jdListPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_LIST_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_LIST_PAGE);
  ReactGA.event("enter_jd_list", { prev: funnel });
};

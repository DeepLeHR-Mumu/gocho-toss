import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const jdHomeFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_HOME) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_HOME);
  ReactGA.event(FUNNEL.JD_HOME, { prev: funnel });
};

export const jdListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_LIST);
  ReactGA.event(FUNNEL.JD_LIST, { prev: funnel });
};

export const jdDetailFunnelEvent = (id: number) => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_DETAIL) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_DETAIL);
  ReactGA.event(FUNNEL.JD_DETAIL, { prev: funnel, jd_id: id });
};

export const jdBookmarkEvent = (jdId: number) => {
  ReactGA.event("bookmark_jd", { jd_id: jdId });
};

export const jdAdClickEvent = (jdId: number) => {
  ReactGA.event(`ad_jd_list_${{ jdId }}_click`);
};

export const myFilterSaveEvent = () => {
  ReactGA.event("save_my_filter");
};

export const myFilterLoadEvent = () => {
  ReactGA.event("load_my_filter");
};

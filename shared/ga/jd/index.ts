import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const jdListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_LIST);
  ReactGA.event("enter_jd_list", { prev: funnel });
};

export const jdDetailFunnelEvent = (id: number) => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_DETAIL) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_DETAIL);
  ReactGA.event("enter_jd_detail", { prev: funnel, jd_id: id });
};

export const jdBookmarkEvent = (jdId: number) => {
  ReactGA.event("bookmark_jd", { jd_id: jdId });
};
export const jdAdClickEvent = (id: number) => {
  ReactGA.event("click_jd_card_banner", { id: id });
};

export const jdSearchEvent = (q: string | null) => {
  ReactGA.event("search_jd_list", { q: q });
};

export const myFilterSaveEvent = () => {
  ReactGA.event("save_my_filter");
};

export const myFilterLoadEvent = () => {
  ReactGA.event("load_my_filter");
};

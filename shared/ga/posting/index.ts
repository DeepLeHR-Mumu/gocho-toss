import ReactGA from "react-ga4";

import { FUNNEL } from "../constant";

export const postingListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.POSTING_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.POSTING_LIST);
  ReactGA.event("enter_posting_list", { prev: funnel });
};

export const postingListInfinityScroll = (count: number) => {
  ReactGA.event(`request_posting_list_${count}`);
};

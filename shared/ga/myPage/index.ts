import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const myPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MYPAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MYPAGE);
  ReactGA.event("enter_mypage", { prev: funnel });
};



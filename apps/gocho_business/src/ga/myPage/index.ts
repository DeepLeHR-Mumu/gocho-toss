import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const myPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MAIN_PAGE) {
    return;
  }
  ReactGA.event("enter_mypage", { prev: funnel });
  sessionStorage.setItem("funnel", FUNNEL.MAIN_PAGE);
};

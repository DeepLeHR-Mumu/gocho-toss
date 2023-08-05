import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const myPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MY_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MY_PAGE);
  ReactGA.event("enter_mypage", { prev: funnel });
};

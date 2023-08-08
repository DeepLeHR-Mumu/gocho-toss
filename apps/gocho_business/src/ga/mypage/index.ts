import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const mypageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MY_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MY_PAGE);
  ReactGA.event("mypage_enter", { prev: funnel });
};

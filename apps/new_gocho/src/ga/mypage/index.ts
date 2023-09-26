import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const mypageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MYPAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MYPAGE);
  ReactGA.event(FUNNEL.MYPAGE, { prev: funnel });
};

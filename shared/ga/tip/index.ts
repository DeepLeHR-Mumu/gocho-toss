import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const tipListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.TIP_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.TIP_LIST);
  ReactGA.event("enter_tip_list", { prev: funnel });
};

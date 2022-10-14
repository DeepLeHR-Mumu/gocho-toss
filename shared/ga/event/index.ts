import ReactGA from "react-ga4";

import { FUNNEL } from "../constant";

export const eventFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.HOME) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.HOME);
  ReactGA.event("enter_welcome", { prev: funnel });
};

import ReactGA from "react-ga4";

import { FUNNEL } from "../constant";

export const homeFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.HOME) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.HOME);
  ReactGA.event(FUNNEL.HOME, { prev: funnel });
};

export const adClickEvent = () => {
  ReactGA.event("ad_main_poscoFutureM_click");
};

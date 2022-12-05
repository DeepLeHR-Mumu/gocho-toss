import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const notFoundFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.NOT_FOUND) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.NOT_FOUND);
  ReactGA.event("enter_404", { prev: funnel });
};

export const notFoundEvent = () => {
  ReactGA.event("404_error");
};

export const unknownErrorFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.UNKNOWN_ERROR) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.UNKNOWN_ERROR);
  ReactGA.event("enter_500", { prev: funnel });
};

export const unknownErrorEvent = () => {
  ReactGA.event("500_error");
};

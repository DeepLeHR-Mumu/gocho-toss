import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const loginSuccessEvent = (isAutoLogin: boolean) => {
  ReactGA.event("login", { is_auto: isAutoLogin });
};

export const loginPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.LOGIN_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.LOGIN_PAGE);
  ReactGA.event("login_enter", { prev: funnel });
};

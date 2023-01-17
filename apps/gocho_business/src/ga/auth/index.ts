import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const loginSuccessEvent = (isAutoLogin: boolean) => {
  ReactGA.event("login", { is_auto: isAutoLogin });
};

export const loginPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MAIN_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MAIN_PAGE);
  ReactGA.event("enter_welcome", { prev: funnel });
};

export const signupButtonClickEvent = () => {
  ReactGA.event("signup_button_click");
};

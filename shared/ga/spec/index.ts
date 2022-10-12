import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const mySpecListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MY_SPEC_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MY_SPEC_LIST);
  ReactGA.event("enter_my_spec", { prev: funnel });
};

export const specRegisterFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.REGISTER_SPEC) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.REGISTER_SPEC);
  ReactGA.event("enter_spec_register", { prev: funnel });
};

export const specListFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.SPEC_LIST) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.SPEC_LIST);
  ReactGA.event("enter_spec_list", { prev: funnel });
};

export const specRegisterStepEvent = (step: number) => {
  ReactGA.event(`register_spec_step_${step}`);
};

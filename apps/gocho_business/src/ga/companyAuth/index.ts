import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const companyAuthFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.COMPANY_AUTH_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.COMPANY_AUTH_PAGE);
  ReactGA.event("company_auth_enter", { prev: funnel });
};

export const companyAuthDocsClickEvent = () => {
  ReactGA.event("company_docs_file_click");
};

export const companyAuthLogoClickEvent = () => {
  ReactGA.event("company_logo_file_click");
};

export const companyAuthUnionClickEvent = () => {
  ReactGA.event("company_union_click");
};

export const companyAuthSubmitClickEvent = () => {
  ReactGA.event("company_verify_submit_click");
};

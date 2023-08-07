import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const homeFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.HOME_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.HOME_PAGE);
  ReactGA.event("home_enter", { prev: funnel });
};

export const homeAlarmClickEvent = () => {
  ReactGA.event("home_alarm_click");
};

export const homeCompanyInfoClickEvent = () => {
  ReactGA.event("home_company_info_click");
};

export const homeProfileInfoClickEvent = () => {
  ReactGA.event("home_profile_info_click");
};

export const homeNewsClickEvent = () => {
  ReactGA.event("home_news_click");
};

export const homeAlertEvent = () => {
  ReactGA.event("home_alert_click");
};

export const homeVerityCompanyEvent = () => {
  ReactGA.event("home_verity_company_click");
};

export const homeJdUploadEvent = () => {
  ReactGA.event("home_jd_upload_click");
};

export const homeQnaEvent = () => {
  ReactGA.event("home_qna_click");
};

export const homeJdListEvent = () => {
  ReactGA.event("home_jd_list_click");
};

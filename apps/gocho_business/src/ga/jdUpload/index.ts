import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const jdUploadExitEvent = () => {
  ReactGA.event("jd_upload_bounce_confirm");
};

export const jdUploadExitDoneEvent = () => {
  ReactGA.event("jd_upload_bounce");
};

export const jdUploadFailEvent = (tryCount: number) => {
  ReactGA.event("jd_upload_fail", { try_count: tryCount });
};

export const jdUploadConfirmEvent = () => {
  ReactGA.event("jd_upload_confirm");
};

export const jdUploadDoneEvent = () => {
  ReactGA.event("jd_upload");
};

export const jdUploadPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_UPLOAD_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_UPLOAD_PAGE);
  ReactGA.event("enter_jd_upload", { prev: funnel });
};

import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const jdUploadPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.JD_UPLOAD_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.JD_UPLOAD_PAGE);
  ReactGA.event("jd_upload_enter", { prev: funnel });
};

export const jdUploadClickEvent = () => {
  ReactGA.event("jd_upload_click");
};

export const jdUploadExitEvent = () => {
  ReactGA.event("jd_upload_bounce_confirm");
};

export const jdUploadExitDoneEvent = () => {
  ReactGA.event("jd_upload_bounce");
};

export const jdUploadFailEvent = (tryCount: number) => {
  ReactGA.event("jd_upload_fail", { try_count: tryCount });
};

export const jdUploadDoneEvent = () => {
  ReactGA.event("jd_upload");
};

export const jdTitleClickEvent = () => {
  ReactGA.event("jd_title_click");
};

export const jdCareerClickEvent = () => {
  ReactGA.event("jd_career_click");
};

export const jdAcademicClickEvent = () => {
  ReactGA.event("jd_academic_click");
};

export const jdRotationClickEvent = () => {
  ReactGA.event("jd_rotation_click");
};

export const jdPlaceAddClickEvent = () => {
  ReactGA.event("jd_place_add_click");
};

export const jdMailClickEvent = () => {
  ReactGA.event("jd_mail_click");
};

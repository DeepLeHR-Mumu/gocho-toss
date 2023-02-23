import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const factoryUploadFailEvent = (tryCount: number) => {
  ReactGA.event("factory_upload_fail", { try_count: tryCount });
};

export const factoryUploadConfirmEvent = () => {
  ReactGA.event("factory_upload_confirm");
};

export const factoryUploadDoneEvent = () => {
  ReactGA.event("factory_upload");
};

export const factoryEditFailEvent = (tryCount: number) => {
  ReactGA.event("factory_edit_fail", { try_count: tryCount });
};

export const factoryEditConfirmEvent = () => {
  ReactGA.event("factory_edit_confirm");
};

export const factoryEditDoneEvent = () => {
  ReactGA.event("factory_edit");
};

export const factoryDeleteConfirmEvent = () => {
  ReactGA.event("factory_delete_confirm");
};

export const factoryDeleteDoneEvent = () => {
  ReactGA.event("factory_delete");
};

export const factoryListPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.FACTORY_LIST_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.FACTORY_LIST_PAGE);
  ReactGA.event("enter_factory_list", { prev: funnel });
};

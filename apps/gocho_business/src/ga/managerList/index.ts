import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const managerListPageFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.MANAGER_LIST_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.MANAGER_LIST_PAGE);
  ReactGA.event("enter_manager_list", { prev: funnel });
};

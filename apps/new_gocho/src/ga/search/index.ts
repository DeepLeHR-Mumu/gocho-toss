import ReactGA from "react-ga4";
import { FUNNEL } from "../constant";

export const globalSearchEvent = (searchStr: string) => {
  ReactGA.event("search", { q: searchStr });
};

export const searchFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.SEARCH_PAGE) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.SEARCH_PAGE);
  ReactGA.event(FUNNEL.SEARCH_PAGE, { prev: funnel });
};

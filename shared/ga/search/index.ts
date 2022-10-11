import ReactGA from "react-ga4";

export const globalSearchEvent = (searchStr: string) => {
  ReactGA.event("search", { q: searchStr });
};

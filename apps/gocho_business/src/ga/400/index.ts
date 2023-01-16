import ReactGA from "react-ga4";

export const notFoundPageErrorEvent = (path: string) => {
  ReactGA.event("400_error", { path });
};

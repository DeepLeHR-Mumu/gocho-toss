import ReactGA from "react-ga4";

export const unknownPageErrorEvent = (path: string) => {
  ReactGA.event("500_error", { path });
};
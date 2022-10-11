import ReactGA from "react-ga4";

export const LoginEvent = () => {
  ReactGA.event("open_login_modal", { referrer: document.referrer, path: window.location.href });
};

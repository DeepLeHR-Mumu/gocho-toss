import ReactGA from "react-ga4";

export const registerClickEvent = () => {
  ReactGA.event("register_click");
};

export const registerCompanySearchClickEvent = () => {
  ReactGA.event("register_search");
};

export const registerCompanyAddSearchClickEvent = () => {
  ReactGA.event("register_search_add_click");
};

export const registerCompanySearchNextClickEvent = () => {
  ReactGA.event("register_search_next_click");
};

export const registerEmailNextClickEvent = () => {
  ReactGA.event("register_email_next_click");
};

export const registerPhoneValidationClickEvent = () => {
  ReactGA.event("register_phone_validation_click");
};

export const registerCompleteClickEvent = () => {
  ReactGA.event("register_complete_click");
};

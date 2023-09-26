import ReactGA from "react-ga4";

export const loginModalOpenEvent = () => {
  ReactGA.event("open_login_modal", { referrer: document.referrer, path: window.location.pathname });
};

export const loginModalCloseEvent = () => {
  ReactGA.event("close_login_modal");
};

export const loginSuccessEvent = (loginId: number, loginMethod: "kakao" | "gocho", kakaopath?: string | null) => {
  ReactGA.set({ user_id: loginId });
  ReactGA.set({ login_method: loginMethod });
  ReactGA.event("login", { referrer: document.referrer, path: kakaopath || window.location.pathname });
};

export const signupModalOpenEvent = () => {
  ReactGA.event("open_signup_modal", { referrer: document.referrer, path: window.location.pathname });
};

export const signupModalCloseEvent = () => {
  ReactGA.event("close_signup_modal");
};

export const signupSuccessEvent = () => {
  ReactGA.event("sign_up", { referrer: document.referrer, path: window.location.pathname });
};

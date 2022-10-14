import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  max-height: 90vh;
  min-height: 70vh;
  background-color: ${COLORS.GRAY100};
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
`;

export const closeButton = css`
  position: absolute;
  top: 0.875rem;
  right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLUE_FIRST40};
`;

export const logoContainer = css`
  width: 7.5rem;
  height: 1rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const desc = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const formCSS = css`
  width: 100%;
`;

export const formArr = css`
  margin: 3rem 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  > li {
    margin-bottom: 1.5rem;

    :last-of-type {
      margin: 0;
    }
  }
`;

export const errorMsgCSS = css`
  font-size: 0.875rem;
  height: 1rem;
  color: ${COLORS.ERROR_RED30};
  text-align: center;
  margin-bottom: 1rem;
`;

export const loginButton = css`
  margin-bottom: 0.3rem;
`;

export const kakaoLoginBox = css`
  background-color: #ffe812;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.875rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  color: #4d4d4d;
  font-weight: 500;
  margin-top: 0.3rem;
`;

export const kakaoLogoBox = css`
  position: relative;
  width: 1rem;
  height: 0.875rem;
  margin-right: 0.5rem;
`;

export const findPwButton = css`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 0;
  color: ${COLORS.GRAY40};
  text-decoration: underline;
  font-size: 0.875rem;
`;

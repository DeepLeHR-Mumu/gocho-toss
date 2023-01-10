import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 80;
  width: 22rem;
  height: auto;
  padding: 2rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

export const closeBtn = css`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  border-radius: 50%;
`;

export const logoContainer = css`
  width: 7.5rem;
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
  margin: 1.5rem 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  > li {
    margin-bottom: 1.25rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const errorBox = css`
  margin-top: 0.2rem;
  min-height: 0.75rem;
  margin-bottom: 1.25rem;
`;

export const errorMsgCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.ERROR_RED30};
  text-align: center;
`;

export const loginButton = css`
  margin-bottom: 0.3rem;
`;

import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  height: 48rem;
  max-height: 90vh;
  padding: 3rem 3rem 14rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const closeButton = css`
  position: absolute;
  top: 0.875rem;
  right: 1rem;
  font-size: 0.875rem;
  margin: 0 0 0 auto;
  color: ${COLORS.BLUE_FIRST40};
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
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  > li {
    margin-bottom: 2rem;
  }
`;

export const errorBox = css`
  margin-top: 0.2rem;
`;

export const errorMsgCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.ERROR_RED30};
  text-align: center;
  margin-bottom: 1rem;
`;

export const loginButton = css`
  margin-bottom: 0.3rem;
`;

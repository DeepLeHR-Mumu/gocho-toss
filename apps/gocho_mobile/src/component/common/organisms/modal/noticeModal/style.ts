import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const topContainer = css`
  padding: 2rem;
  background-color: ${COLORS.GRAY90};
`;

export const bottomContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
`;

export const title = css`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 1rem;
  display: block;
`;

export const desc = css`
  font-size: 0.875rem;
  line-height: 1.7;
  color: ${COLORS.GRAY20};
  word-break: keep-all;
  margin-bottom: 0.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const mailInfo = css`
  margin-bottom: 0.5rem;
  display: block;
  line-height: 1.7;
  color: ${COLORS.GRAY40};
  font-weight: 500;
`;

export const flexBox = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const logoBox = css`
  position: relative;
  width: 100%;
  max-width: 6.25rem;
  height: 1rem;
  margin: 2rem auto 0;
  > img {
    object-fit: contain;
  }
`;

export const jobiBox = css`
  position: relative;
  width: 40%;
  height: 5rem;
  > img {
    object-fit: contain;
  }
`;

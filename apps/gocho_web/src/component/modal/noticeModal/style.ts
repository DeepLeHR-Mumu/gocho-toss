import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 80;
  width: 100%;
  max-width: 25rem;
  height: auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.GRAY90};
  overflow: hidden;
`;

export const topContainer = css`
  padding: 2rem;
`;

export const bottomContainer = css`
  padding: 2rem 1rem;
  width: 100%;
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
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
  color: ${COLORS.GRAY30};
  line-height: 1.8;
  word-break: keep-all;
  margin-bottom: 0.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const mailInfo = css`
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  line-height: 1.8;
  font-weight: 500;
  word-break: keep-all;
  margin-bottom: 0.5rem;
  display: block;
`;

export const flexBox = css`
  display: flex;
  align-items: flex-end;
`;

export const logoBox = css`
  position: relative;
  width: 100%;
  max-width: 7.5rem;
  height: 1rem;
  margin: 2rem auto 0;
`;

export const jobiBox = css`
  position: relative;
  width: 40%;
  height: 100px;
  margin-left: 1rem;
`;

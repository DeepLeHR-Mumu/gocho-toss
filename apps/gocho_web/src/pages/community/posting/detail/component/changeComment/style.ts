import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const commentWrapper = css``;

export const formCSS = css`
  position: relative;
`;

export const textCSS = css`
  height: 2.5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  padding: 0.5rem;
  width: 100%;
  border: 0;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  vertical-align: middle;
  color: ${COLORS.GRAY40};
  resize: none;
  position: relative;
`;

export const buttonCSS = css`
  width: 2rem;
  font-size: 1.25rem;
  color: ${COLORS.GRAY40};
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  transform: translate(0, -50%);
`;

export const dateCSS = css`
  color: ${COLORS.GRAY40};
  font-size: 0.6875rem;
  font-weight: 400;
  margin: 0.5rem 0 0 1.5rem;
`;

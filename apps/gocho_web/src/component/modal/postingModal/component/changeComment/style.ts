import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const commentWrapper = css`
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  padding: 0.5rem;
`;

export const formCSS = css`
  display: flex;
  justify-content: space-between;
`;

export const textCSS = css`
  width: calc(100% - 3rem);
  border: 0;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  vertical-align: middle;
  line-height: 1.6;
  color: ${COLORS.GRAY40};
  resize: none;
  background-color: transparent;

  :focus {
    outline: 0;
  }
`;

export const buttonCSS = css`
  width: 2rem;
  font-size: 1.25rem;
  color: ${COLORS.GRAY40};
`;

import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  width: 100%;
  background-color: ${COLORS.GRAY90};
  padding: 0.5rem 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  min-height: 2rem;
  margin-bottom: 0.5rem;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const specStrCSS = css`
  width: 100%;
  color: ${COLORS.GRAY10};
  font-weight: 400;
  word-break: break-all;
  font-size: 0.875rem;
  line-height: 1.8;
`;

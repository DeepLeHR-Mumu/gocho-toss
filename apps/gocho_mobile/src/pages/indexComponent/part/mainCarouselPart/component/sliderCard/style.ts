import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = (bgColor: string) => {
  return css`
    width: 100%;
    height: 25.75rem;
    background-color: ${bgColor};
    padding: 3rem;
  `;
};

export const logo = css`
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

export const iconBox = css`
  width: 2.1875rem;
  height: 3.25rem;
  position: relative;
  margin-left: 0.5rem;
`;

export const title = css`
  font-size: 1.5rem;
  color: ${COLORS.GRAY100};
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  min-height: 7rem;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY100};
`;

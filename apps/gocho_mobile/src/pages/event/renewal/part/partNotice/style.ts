import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  text-align: center;
  padding: 12.5rem 0 6rem;
`;

export const title = css`
  text-align: center;
  line-height: 1.6;
  font-size: 1.5rem;
  white-space: nowrap;
  color: ${COLORS.GRAY10};
  font-weight: 700;
  margin-bottom: 1.25rem;
  display: block;
`;

export const desc = css`
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 5rem;
`;

export const listDesc = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
  line-height: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const circleCSS = css`
  display: block;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: ${COLORS.GRAY10};
  margin: 1rem 0;
`;

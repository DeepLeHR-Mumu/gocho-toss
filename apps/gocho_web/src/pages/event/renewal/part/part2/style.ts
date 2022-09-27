import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  text-align: center;
  padding: 18.75rem 0 12.5rem;
`;

export const title = css`
  font-size: 2.5rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
  margin-bottom: 1.25rem;
  display: block;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 10rem;
`;

export const listDesc = css`
  font-size: 1.5rem;
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

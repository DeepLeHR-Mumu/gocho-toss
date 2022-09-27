import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
  padding-top: 6rem;
  text-align: center;
  position: relative;
`;

export const title = css`
  text-align: center;
  line-height: 1.6;
  word-break: keep-all;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 2.5rem;
  display: block;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
`;

export const imgBox = css`
  width: 100%;
  margin: auto;
  position: relative;
  max-width: 56.25rem;
  height: 37.5rem;
  bottom: -8rem;
`;

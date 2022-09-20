import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const slideWrapper = css`
  width: 100%;
  height: auto;
  position: relative;
`;

export const slideInfo = css`
  position: absolute;
  width: 100%;
  max-width: 24.375rem;
  height: 100%;
  background-color: ${COLORS.GRAY20};
  padding: 3.4375rem;
  right: 0;
  top: 0;
  z-index: 20;
`;

export const ddayCSS = css`
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  text-decoration: underline;
`;

export const infoTitle = css`
  font-size: 2rem;
  color: ${COLORS.GRAY100};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  word-break: keep-all;
`;

export const dayTimeCSS = css`
  font-size: 1rem;
  color: ${COLORS.GRAY100};
  white-space: nowrap;
`;

export const dimmed = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #000, transparent);
  opacity: 0.5;
  z-index: 10;
`;

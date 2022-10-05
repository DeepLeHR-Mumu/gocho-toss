import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const headerWrapper = css`
  height: 4.5rem;
  display: flex;
  z-index: 50;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${COLORS.GRAY100};
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
`;

export const logoCSS = css`
  margin-top: 0.125rem;
  width: 8.75rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 700;
`;

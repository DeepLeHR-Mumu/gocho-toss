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
  justify-content: space-between;
`;

export const flexBox = css`
  display: flex;
`;

export const logoCSS = css`
  margin-top: 0.125rem;
  width: 8.75rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;

  img {
    object-fit: contain;
  }
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const loginButton = css`
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
`;

export const logoutButton = css`
  margin-left: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: #b32100;
  color: ${COLORS.GRAY100};
`;

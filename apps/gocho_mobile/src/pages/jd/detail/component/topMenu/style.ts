import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const menuWrapper = css`
  position: sticky;
  top: 3.25rem;
  background-color: ${COLORS.GRAY95};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 10;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  width: calc(100% - 3rem);
`;

export const backButton = css`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  width: 2rem;
  color: ${COLORS.GRAY20};
`;

export const jobTitle = css`
  display: block;
  font-weight: 700;
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  width: calc(100% - 2.5rem);
  ${shorten()};
`;

export const shareIcon = css`
  font-size: 1.25rem;
  width: 2rem;
  color: ${COLORS.BLUE_FIRST40};
`;

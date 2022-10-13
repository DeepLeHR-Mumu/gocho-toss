import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const menuWrapper = css`
  position: sticky;
  top: 3.25rem;
  background-color: ${COLORS.GRAY95};
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 10;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  ${shorten()};
`;

export const backButton = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 0.5rem;
  color: ${COLORS.GRAY10};
`;

export const jobTitle = css`
  flex-grow: 1;
  font-weight: 700;
  line-height: 1.5;
  ${shorten()};
`;

export const shareIcon = css`
  font-size: 1.25rem;
  color: ${COLORS.BLUE_FIRST40};
`;

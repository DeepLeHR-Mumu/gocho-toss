import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cardWrapper = css`
  display: flex;
  width: calc(50% - 1.75rem);
  margin-bottom: 3.5rem;
  border-radius: 1rem;
  border: 1px solid ${COLORS.GRAY90};
  align-items: flex-start;
  position: relative;
  padding: 1rem;
  box-shadow: 0px 0px 0.5rem 0px #2b2b2b1a;
  overflow: hidden;
`;

export const bookmarkButton = css`
  background-color: ${COLORS.GRAY90};
  position: absolute;
  right: 0;
  top: 0;
  color: ${COLORS.GRAY60};
  border-radius: 0 0 0 1rem;
  padding: 1rem;
  font-size: 0.875rem;
`;

export const companyLogoBox = css`
  min-width: 5.5rem;
  height: 5.5rem;
  position: relative;
`;

export const jobInfoBox = css`
  margin-left: 1rem;
`;

export const companyNameCSS = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  line-height: 2;
  ${shorten()}
`;

export const titleCSS = css`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
  ${shorten(2)}
`;

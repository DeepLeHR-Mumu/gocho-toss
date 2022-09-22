import { css } from "@emotion/react";

import { shorten } from "shared-style/shorten";
import { COLORS } from "shared-style/color";

export const cardWrapper = css`
  position: relative;
  width: 31%;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.15);
  padding: 1.75rem;
`;

export const jobInfoContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY70};
`;

export const companyLogoBox = css`
  width: 4rem;
  height: 4rem;
  position: relative;
`;

export const jobInfoBox = css`
  width: calc(100% - 5rem);
`;

export const companyNameContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${shorten()}
`;

export const companyNameBox = css`
  width: 75%;
  ${shorten()}
`;

export const companyName = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
`;

export const titleCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY30};
  margin-top: 0.5rem;
  line-height: 1.2;
  ${shorten()}
`;

export const jobCardSkeleton = css`
  overflow: hidden;
  width: 31%;
  border-radius: 0.5rem;
  height: 10.9375rem;
`;

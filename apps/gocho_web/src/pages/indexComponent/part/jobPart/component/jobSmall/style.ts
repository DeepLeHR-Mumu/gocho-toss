import { css } from "@emotion/react";

import { shorten } from "@style/common";
import { COLORS } from "@style/constant";

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

export const companyNameBox = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const companyNameCSS = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
  padding-bottom: 10px;
  ${shorten()}
`;

export const titleCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY30};
  line-height: 1.2;
  ${shorten()}
`;

export const tagArrContainer = css`
  display: flex;
  margin-top: 1.5rem;
`;

export const tagCSS = css`
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 1.75rem;
  white-space: nowrap;
  color: ${COLORS.GRAY30};
`;

export const jobCardSkeleton = css`
  overflow: hidden;
  width: 31%;
  border-radius: 0.5rem;
  height: 10.9375rem;
`;

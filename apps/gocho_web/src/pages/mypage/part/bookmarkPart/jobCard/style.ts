import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";
import { PC_HOVER } from "shared-style/mediaQuery";

export const cardWrapper = css`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid ${COLORS.GRAY90};
`;

export const jobInfoContainer = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 1rem 0 0 1rem;
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
  color: ${COLORS.GRAY30};
  padding-bottom: 10px;
  ${shorten()}
`;

export const titleCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  line-height: 1.2;
  ${shorten()}
`;

export const buttonContainer = css`
  display: flex;
  align-items: center;
  background-color: ${COLORS.GRAY90};
  padding: 2.5rem 1rem 1rem 1rem;
  border-radius: 0 1rem 1rem 0;
  position: relative;
`;

export const bookmarkButtonWrapper = css`
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY90};
  border-radius: 0 1rem 0 1rem;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const bookmarkButtonBox = css`
  width: 1rem;
  height: 1rem;
  background-color: ${COLORS.GRAY100};
  position: relative;
`;

export const button = css`
  padding: 0.5rem 1.5rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY100};

  font-size: 1rem;
  font-weight: 500;
  border-radius: 2rem;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.BLUE_FIRST40};
      border: 1px solid ${COLORS.BLUE_FIRST40};
    }
  }
`;

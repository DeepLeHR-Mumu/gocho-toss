import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const cardWrapper = css`
  width: 32%;
  padding-bottom: 0.875rem;
  border-bottom: 2px solid ${COLORS.GRAY90};
  transition: border 0.2s ease;

  ${PC_HOVER} {
    :hover {
      border-color: ${COLORS.GRAY10};
    }
  }
`;

export const linkArea = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const cardImageBox = css`
  width: 11.25rem;
  height: 6rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
`;

export const cardInfo = css`
  padding-left: 0.5rem;
  width: calc(100% - 11.25rem);
`;

export const cardTitle = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  word-break: keep-all;
  line-height: 1.6;
  margin-bottom: 1rem;
  ${shorten(2)};
`;

export const cardDesc = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  line-height: 1.6;
  ${shorten(2)};
`;

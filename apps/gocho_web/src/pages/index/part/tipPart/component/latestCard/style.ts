import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";
import { TABLET } from "shared-style/mediaQuery";

export const cardWrapper = (isCurrentTip: boolean) => {
  return css`
    width: 32%;
    padding-bottom: 0.875rem;
    border-bottom: 2px solid ${COLORS.GRAY90};
    transition: border-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${isCurrentTip && COLORS.GRAY10};
  `;
};

export const linkArea = css``;

export const cardImageBox = css`
  width: 11.25rem;
  height: 6rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;

  ${TABLET} {
    width: 7.5rem;
    height: 5rem;
  }
  > img {
    object-fit: cover;
  }
`;

export const cardInfo = css`
  padding-left: 0.5rem;
  width: calc(100% - 11.25rem);

  ${TABLET} {
    width: calc(100% - 7.5rem);
  }
`;

export const cardTitle = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  word-break: keep-all;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: block;
  ${shorten()};
`;

export const cardDesc = css`
  word-break: break-word;
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  line-height: 1.6;
  ${shorten(2)};
`;

import { css } from "@emotion/react";
import { shorten } from "@style/common";
import { COLORS } from "@style/constant";

export const cardWrapper = css`
  width: 47%;
  margin-bottom: 2rem;
`;

export const linkArea = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const cardImageBox = css`
  width: 100%;
  max-width: 9rem;
  height: 6.25rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

export const cardInfo = css`
  padding-left: 2rem;
  width: 100%;
  max-width: calc(100% - 9rem);
`;

export const cardTitle = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY20};
  font-weight: 600;
  word-break: keep-all;
  line-height: 1.5;
  margin-bottom: 1rem;
  ${shorten(2)};

  > span {
    display: block;

    :first-of-type {
      text-decoration: underline;
    }
  }
`;

export const cardDesc = css`
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  ${shorten()};
`;

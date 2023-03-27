import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";
import { TABLET } from "shared-style/mediaQuery";

export const bestUserInfoWrapper = css`
  width: 100%;
  max-width: 36rem;
  position: relative;
`;

export const skeletonBoxCSS = css`
  width: 100%;
  max-width: 36rem;
  position: relative;
  height: 28.25rem;
  border-radius: 3rem;
  overflow: hidden;
`;

export const cardWrapper = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 3rem;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);
  padding: 3rem;
  display: flex;
  flex-direction: column;

  ${TABLET} {
    padding: 2rem;
  }
`;
export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;
export const cardHeader = css`
  margin-bottom: 3.875rem;
  display: flex;
  align-items: center;
`;

export const cardHeaderInfo = css`
  padding-left: 2rem;
`;

export const userNickname = css`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  line-height: 2;
  display: flex;
  align-items: center;
`;

export const scoreDesc = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const scoreTitle = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  padding-right: 10px;
  font-weight: 400;
`;

export const currentScore = css`
  font-weight: 600;
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1.875rem;
  padding-right: 5px;
`;

export const totalScore = css`
  font-weight: 400;
  color: ${COLORS.GRAY40};
  font-size: 1.125rem;
`;

export const userEvalCount = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  padding-left: 1rem;
  white-space: nowrap;
`;

export const userTaskCSS = css`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > li {
    color: ${COLORS.GRAY40};
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0 0.5rem 0.5rem 0;

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const cardInfo = css`
  display: flex;
  flex-direction: column;
`;

export const infoArrCSS = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > li {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${COLORS.GRAY40};
    white-space: nowrap;
    margin-right: 2rem;
  }
`;

export const infoValueCSS = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 600;
  padding-left: 0.5rem;
  ${shorten()}
`;

export const noValueText = css`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
`;

export const cardFooter = css`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const bestUserDesc = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
  position: relative;
  line-height: 2;
`;

export const bestUserNickName = css`
  padding: 0 5px;
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 500;
  position: relative;
`;

export const bounceIcon = css`
  position: absolute;
  left: 0;
  top: -1.75rem;
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  animation: bounceAnimation 1s ease infinite;

  @keyframes bounceAnimation {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      transform: translate3d(0, -10px, 0);
    }

    70% {
      transform: translate3d(0, -6px, 0);
    }

    90% {
      transform: translate3d(0, -3px, 0);
    }
  }
`;

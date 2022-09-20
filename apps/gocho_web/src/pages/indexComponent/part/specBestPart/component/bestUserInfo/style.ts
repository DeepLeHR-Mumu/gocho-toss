import { css, keyframes } from "@emotion/react";
import { shorten } from "@style/common";
import { COLORS } from "shared-style/color";

const bounceAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
  }

  40%, 43% {
    transform: translate3d(0, -10px, 0);
  }

  70% {
    transform: translate3d(0, -6px, 0);
  }

  90% {
    transform: translate3d(0, -3px, 0);
  }
`;

export const bestUserInfoWrapper = css`
  width: 100%;
  max-width: 38rem;
  position: relative;
`;

export const cardWrapper = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const cardHeader = css`
  border-bottom: 1px solid ${COLORS.GRAY70};
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
`;

export const userProfileImageBox = css`
  width: 9.375rem;
  height: 9.375rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
`;

export const cardHeaderInfo = css`
  padding-left: 2rem;
`;

export const userNickname = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY20};
  font-weight: 600;
  line-height: 2;
`;

export const recruSectorDesc = css`
  font-size: 1rem;
  line-height: 2;
  color: ${COLORS.GRAY30};
`;

export const scoreDesc = css`
  line-height: 2;
  display: flex;
  align-items: center;
`;

export const scoreTitle = css`
  font-size: 1rem;
  color: ${COLORS.GRAY20};
  padding-right: 10px;
`;

export const currentScore = css`
  font-weight: 600;
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1.875rem;
  padding-right: 5px;
`;

export const totalScore = css`
  font-weight: 600;
  color: ${COLORS.GRAY30};
  font-size: 1.5rem;
`;

export const userEvalCount = css`
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  padding-left: 1rem;
`;

export const starScore = css``;

export const cardInfo = css`
  display: flex;
  flex-direction: column;
`;

export const infoArrCSS = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  min-height: 1rem;

  > li {
    font-weight: 600;
    font-size: 1rem;
    color: ${COLORS.BLUE_FIRST40};
    white-space: nowrap;
    margin-right: 1.5rem;
  }
`;

export const infoValueCSS = css`
  color: ${COLORS.GRAY20};
  padding-left: 0.5rem;
  ${shorten()}
`;

export const dateCSS = css`
  font-size: 0.75rem;
  color: #646464;
  font-weight: 400;
  padding-left: 10px;
`;

export const workingTime = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY20};
  font-weight: 400;
`;

export const cardFooter = css`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const moreButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.25rem;
  background-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
  font-size: 1rem;
  border-radius: 2rem;
  font-weight: 500;
`;

export const bestUserDesc = css`
  font-size: 1rem;
  color: ${COLORS.GRAY20};
  position: relative;
  line-height: 2;
`;

export const bestUserNickName = css`
  padding: 0 5px;
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 600;
  position: relative;
`;

export const bounceIcon = css`
  position: absolute;
  left: 0;
  top: -1.75rem;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  animation: ${bounceAnimation} 1s ease infinite;
`;

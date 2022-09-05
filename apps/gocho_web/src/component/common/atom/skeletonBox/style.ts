import { css, keyframes } from "@emotion/react";

import { COLORS } from "@style/constant";

const skeletonAnimation = keyframes`
  0% {
    background-position: 0px
  }
  100% {
    background-position: 600px
  }
`;

export const skeleton = css`
  background-color: ${COLORS.GRAY100};
  width: 100%;
  height: 100%;
  background-image: linear-gradient(125deg, ${COLORS.GRAY90} 40%, ${COLORS.GRAY100} 50%, ${COLORS.GRAY90} 60%);
  background-size: 600px;
  animation: ${skeletonAnimation} 1.6s infinite linear;
`;

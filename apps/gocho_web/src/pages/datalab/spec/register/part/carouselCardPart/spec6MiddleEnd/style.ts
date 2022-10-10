import { css } from "@emotion/react";

import { PC_HOVER } from "shared-style/mediaQuery";
import { COLORS } from "shared-style/color";

export const desc = css`
  color: ${COLORS.GRAY40};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 2;
`;

export const colorPoint = css`
  font-weight: 700;
  color: ${COLORS.BLUE_FIRST40};
`;

export const animationBox = css`
  width: 18.75rem;
  height: 18.75rem;
  background-color: ${COLORS.GRAY100};
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-indent: -99999px;
  color: ${COLORS.GRAY10};
`;

export const postButtonCSS = css`
  width: 100%;
  max-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: ${COLORS.BLUE_NEON50};
  font-size: 1rem;
  height: 3rem;
  padding: 0 2rem;
  box-sizing: border-box;
  border-radius: 2rem;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.16);
  margin: auto;
  transition: all 0.2s ease;
  color: ${COLORS.GRAY100};
  position: relative;
  animation: bounceUpDown 1.25s infinite ease-out;

  > svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translate(0, -50%);
  }

  @keyframes bounceUpDown {
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
      transform: translate3d(0, -5px, 0);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
`;

export const moveButtonContainer = css`
  position: absolute;
  left: 0;
  bottom: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonCSS = css`
  width: 100%;
  max-width: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  font-size: 0.875rem;
  box-sizing: border-box;
  border-radius: 2rem;
  font-weight: 500;
  margin: 0 2rem;
  height: 3rem;
  transition: all 0.2s ease;
`;

export const prevButton = css`
  ${buttonCSS};
  background-color: ${COLORS.GRAY100};
  border-color: ${COLORS.GRAY70};
  color: ${COLORS.GRAY70};

  ${PC_HOVER} {
    :hover {
      border-color: ${COLORS.BLUE_FIRST40};
      color: ${COLORS.BLUE_FIRST40};
    }
  }
`;

export const nextButton = css`
  ${buttonCSS};
  background-color: ${COLORS.BLUE_FIRST40};
  border-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
`;

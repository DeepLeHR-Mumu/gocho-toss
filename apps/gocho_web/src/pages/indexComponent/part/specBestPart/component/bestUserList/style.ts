import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const bestUserArrWrapper = css`
  width: 100%;
  max-width: 29rem;
  display: flex;
  flex-wrap: wrap;
`;

interface setUserCardDef {
  (active: boolean): SerializedStyles;
}

export const setUserCard: setUserCardDef = (active) => {
  return css`
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 1.5rem;
    background-color: ${COLORS.GRAY100};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.875rem;
    margin: 0 1.375rem 1.375rem 0;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.16);
    transition: all 0.2s ease-in;

    :nth-of-type(3n) {
      margin-right: 0;
    }
    :nth-of-type(n + 7) {
      margin-bottom: 0;
    }

    ${active &&
    `
      background-color: ${COLORS.BLUE_NEON40};
      strong {
        color: ${COLORS.GRAY100};
      }
      p {
        color: ${COLORS.GRAY100};
      }    
    `}
  `;
};

export const skeletonCardBox = css`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 1.5rem;
  overflow: hidden;
  margin: 0 1.375rem 1.375rem 0;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.16);

  :nth-of-type(3n) {
    margin-right: 0;
  }
  :nth-of-type(n + 7) {
    margin-bottom: 0;
  }
`;

export const userNickname = css`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS.GRAY20};
  ${shorten()};
`;

export const scoreCSS = css`
  color: ${COLORS.GRAY40};
  font-weight: 600;
  font-size: 0.875rem;
`;

interface setPointColorDef {
  (active: boolean): SerializedStyles;
}

export const setPointColor: setPointColorDef = (active) => {
  return css`
    color: ${active ? COLORS.ERROR_YELLOW40 : COLORS.BLUE_FIRST40};
    font-size: 1rem;
    font-weight: 500;
  `;
};

export const recruitSectorCSS = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

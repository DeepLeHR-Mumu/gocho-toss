import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const bestUserArrWrapper = css`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-wrap: wrap;
`;

interface setUserCardDef {
  (active: boolean): SerializedStyles;
}

export const setUserCard: setUserCardDef = (active) => {
  return css`
    width: 8rem;
    height: 9rem;
    border-radius: 0.5rem;
    background-color: ${COLORS.GRAY100};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    margin: 0 1rem 1rem 0;
    cursor: pointer;
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
      width:9rem;
      background-color: ${COLORS.BLUE_NEON40};
      h4 {
        color: ${COLORS.GRAY100};
      }
      p {
        color: ${COLORS.GRAY100};
      }    
    `}
  `;
};

export const profileBox = css`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  border-radius: 50%;
`;

export const userNickname = css`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS.GRAY20};
`;

export const scoreCSS = css`
  color: ${COLORS.GRAY30};
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
  `;
};

export const recruitSectorCSS = css`
  font-size: 8px;
  color: ${COLORS.GRAY30};
`;

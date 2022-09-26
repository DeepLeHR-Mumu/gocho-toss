import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const slideWrapper = css`
  width: 100%;
  height: auto;
  position: relative;
`;

interface slideInfoDef {
  (backgroundColor: string): SerializedStyles;
}

export const slideInfo: slideInfoDef = (backgroundColor) => {
  return css`
    position: absolute;
    width: 100%;
    max-width: 24.375rem;
    height: 100%;
    background-color: ${backgroundColor};
    padding: 3rem;
    right: 0;
    top: 0;
    z-index: 20;
  `;
};

export const topDescCSS = css`
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const middleDescCSS = css`
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

export const middleDescIconBox = css`
  width: 2.1875rem;
  height: 3.25rem;
  position: relative;
  margin-left: 0.5rem;
`;

export const titleCSS = css`
  font-size: 1.5rem;
  color: ${COLORS.GRAY100};
  display: block;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  margin-bottom: 1.5rem;
`;

export const dimmed = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #000 5%, transparent 95%);
  opacity: 0.25;
  z-index: 10;
`;

export const lastDescCSS = css`
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  color: ${COLORS.GRAY100};
`;

interface LinkButtonDef {
  (colorCode?: string): SerializedStyles;
}

export const linkButton: LinkButtonDef = (colorCode) => {
  return css`
    width: 7.5rem;
    height: 2.5rem;
    background-color: ${colorCode};
    color: ${COLORS.GRAY100};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.6;
    transition: opacity 0.2s ease;
    position: absolute;
    bottom: 2rem;

    ${PC_HOVER} {
      :hover {
        opacity: 1;
      }
    }
  `;
};

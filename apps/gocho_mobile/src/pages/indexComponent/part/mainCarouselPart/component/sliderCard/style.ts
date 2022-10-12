import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = (bgColor: string) => {
  return css`
    width: 100%;
    height: 25.75rem;
    background-color: ${bgColor};
    padding: 3rem;
  `;
};

export const middleDescCSS = css`
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
`;

export const logo = css`
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const iconBox = css`
  width: 2.1875rem;
  height: 3.25rem;
  position: relative;
  margin-left: 0.5rem;
`;

export const title = css`
  display: block;
  font-size: 1.5rem;
  color: ${COLORS.GRAY100};
  font-weight: 600;
  line-height: 1.6;
  word-break: keep-all;
  margin-bottom: 2rem;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY100};
`;

interface LinkButtonDef {
  (backgroundColor: string, color: string): SerializedStyles;
}

export const linkButton: LinkButtonDef = (backgroundColor, color) => {
  return css`
    width: 7.5rem;
    height: 2.5rem;
    background-color: ${backgroundColor};
    color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 500;
    transition: opacity 0.2s ease;
    position: absolute;
    bottom: 2rem;
  `;
};

export const topDescCSS = css`
  color: ${COLORS.GRAY100};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

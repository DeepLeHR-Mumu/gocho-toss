import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${COLORS.GRAY90};
  margin-top: -1rem;
  padding: 3rem 0;
  z-index: 10;
`;

export const formBackground = css`
  position: fixed;
  cursor: default;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: ${COLORS.GRAY10};
  opacity: 0.7;
`;

export const filterContainer = css`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem 1.5rem 0 0;
  z-index: 50;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const filterButton = css`
  font-size: 0.75rem;
  font-weight: 400;
  width: fit-content;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const searchWrapper = css`
  position: relative;
  margin-bottom: 1rem;
`;

export const searchBox = css`
  width: 100%;
  font-family: Noto Sans KR, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY80};
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;

export const buttonArrContainer = css`
  display: flex;
`;

export const setJobOrderButton = (active = false) => {
  return css`
    font-size: 0.75rem;
    width: fit-content;
    text-align: center;
    border-radius: 1.5rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
    margin-right: 0.5rem;
    padding: 0.5rem 0.75rem;
    transition: all 0.2s ease;

    ${PC_HOVER} {
      :hover {
        border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
        background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
      }
    }
  `;
};

import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const mainContainer = css`
  padding: 4rem 0;
`;

export const title = css`
  font-size: 1.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const sectionContainer = css`
  padding: 4rem 0;
`;

export const searchContainer = css`
  display: flex;
`;

export const searchWrapper = css`
  flex-grow: 1;
  margin-right: 1rem;
  position: relative;
`;

export const searchBox = css`
  width: 100%;
  height: 2.5rem;
  font-family: Noto Sans KR, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 3rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
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
  align-items: center;
  justify-content: space-between;
`;

export const setJobOrderButton = (active = false) => {
  return css`
    width: fit-content;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    transition: all 0.2s ease;

    ${PC_HOVER} {
      :hover {
        border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
        background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
      }
    }
  `;
};

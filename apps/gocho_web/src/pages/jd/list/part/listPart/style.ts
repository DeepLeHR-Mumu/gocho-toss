import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.GRAY90};
  padding: 6rem 0 4rem;
`;

export const title = css`
  font-size: 1.75rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const flexBox = css`
  display: flex;
  margin-top: 1rem;
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
  background-color: ${COLORS.GRAY100};
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

export const infoContainer = css`
  display: flex;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY60};
`;

export const infoImage = css`
  margin: 0 1rem;

  &:last-of-type {
    margin-left: 0;
  }
`;

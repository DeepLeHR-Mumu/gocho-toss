import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const mainContainer = css``;

export const title = css`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin: 5rem 0 4.5rem 0;
`;

export const listContainer = css`
  margin-bottom: 2.75rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;


export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const setJobOrderButton = (active = false) => {
  return css`
    width: fit-content;
    height: 2.5rem;
    text-align: center;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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


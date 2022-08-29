import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const partContainer = css`
  background-color: ${COLORS.GRAY90};
  padding: 3rem 0;
`;

export const title = css`
  font-size: 1.75rem;
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
    text-align: center;
    border-radius: 1rem;
    border: 1px solid ${active ? COLORS.BLUE_SECOND40 : `${COLORS.GRAY70}`};
    color: ${active ? "#3171b7" : `${COLORS.GRAY30}`};
    background-color: ${active ? COLORS.BLUE_SECOND40 : "transparent"};
    font-weight: ${active ? "600" : "400"};
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    transition: all 0.2s ease;

    :last-of-type {
      margin-right: 0;
    }
  `;
};

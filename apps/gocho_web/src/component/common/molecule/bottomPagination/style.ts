import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const paginationContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const movePageButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 50%;
  color: ${COLORS.GRAY40};
  background-color: ${COLORS.GRAY80};
  opacity: 0.7;

  transition: all 0.2s ease-in;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.GRAY10};
      border: 0;
    }
  }
`;

export const selectPageButton = (isCurrent = false) => {
  return css`
    color: ${isCurrent ? COLORS.GRAY10 : `${COLORS.GRAY60}`};
    font-size: 0.75rem;
    padding: 0 1rem;
  `;
};

import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const paginationContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const movePageButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  border-radius: 50%;
  color: ${COLORS.GRAY40};
  background-color: ${COLORS.GRAY80};
  opacity: 0.7;
  transition: all 0.2s ease-in;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.GRAY10};
    }
  }
`;

export const selectPageButton = (isCurrent = false) => css`
  color: ${isCurrent ? COLORS.GRAY10 : `${COLORS.GRAY60}`};
  font-weight: 500;
  font-size: 1rem;
  padding: 0 1rem;
`;

export const paginationBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface PaginationButtonDef {
  (isActivePage: boolean): SerializedStyles;
}

export const paginationButton: PaginationButtonDef = (isActivePage) => css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${isActivePage ? COLORS.GRAY10 : COLORS.GRAY60};
  padding: 1rem;
`;
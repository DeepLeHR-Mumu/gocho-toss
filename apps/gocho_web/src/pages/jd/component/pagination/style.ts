import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const paginationContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  border-radius: 1.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.GRAY60};
`;

export const movePageButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 50%;
  color: ${COLORS.GRAY100};

  transition: all 0.2s ease-in;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.GRAY10};
      border: 0;
    }
  }
`;

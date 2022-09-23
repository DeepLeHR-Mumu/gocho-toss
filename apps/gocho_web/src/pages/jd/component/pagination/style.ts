import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const paginationContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 0.75rem;
  border-radius: 2rem;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  height: 2.5rem;
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

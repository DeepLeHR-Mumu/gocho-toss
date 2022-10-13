import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  width: calc(100% - 6rem);
  display: flex;
  align-items: flex-start;
`;

export const listContainer = css`
  width: 100%;
`;

export const OrderButtonContainer = css`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 1.5rem 2.5rem;
`;

export const desc = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  font-weight: 400;
`;

export const setSpecOrderButton = (active = false) => {
  return css`
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY30};
    font-size: 0.875rem;
    font-weight: 400;
    width: fit-content;
    text-align: center;
    border-radius: 1.5rem;
    padding: 0 2rem;
    margin-left: 1rem;
    transition: all 0.2s ease;
    white-space: nowrap;
    font-weight: ${active ? 500 : 400};
    border: 1px solid ${active ? COLORS.BLUE_SECOND40 : COLORS.GRAY40};
    color: ${active ? "#3171b7" : COLORS.GRAY30};
    background-color: ${active ? COLORS.BLUE_SECOND40 : "transparent"};

    ${PC_HOVER} {
      :hover {
        font-weight: 500;
      }
    }
  `;
};

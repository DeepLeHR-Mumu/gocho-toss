import { css } from "@emotion/react";

import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  width: calc(100% - 6rem);
`;

export const mainContainer = css`
  display: flex;
  align-items: flex-start;
`;

export const listContainer = css`
  flex-grow: 1;
`;

export const OrderButtonContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1.5rem;
  background-color: ${COLORS.BLUE_SECOND90};
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  padding: 1.5rem 2.5rem;
`;

export const setSpecOrderButton = (active = false) => {
  return css`
    width: fit-content;
    text-align: center;
    border-radius: 1.5rem;
    padding: 0.5rem 2rem;
    margin-left: 1rem;
    transition: all 0.2s ease;
    word-break: keep-all;
    font-weight: ${active ? 500 : 400};
    border: 1px solid ${active ? COLORS.BLUE_SECOND40 : `${COLORS.GRAY40}`};
    color: ${active ? "#3171b7" : `${COLORS.GRAY30}`};
    background-color: ${active ? COLORS.BLUE_SECOND40 : "transparent"};

    ${PC_HOVER} {
      :hover {
        font-weight: 500;
      }
    }
  `;
};

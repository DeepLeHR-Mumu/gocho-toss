import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

interface ChangeDataButtonDef {
  (active: boolean): SerializedStyles;
}

export const changeDataButton: ChangeDataButtonDef = (active) => {
  return css`
    width: calc(50% - 5px);
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    border-style: solid;
    border-color: ${active ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    border-width: ${active ? "2px" : "1px"};
    color: ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY40}`};
    background-color: ${active ? COLORS.GRAY100 : COLORS.STATE_SUCCESS};
    font-size: 1.125rem;
    font-weight: 500;
    transition: all 0.2s ease;
  `;
};

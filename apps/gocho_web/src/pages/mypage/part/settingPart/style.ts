import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@style/constant";

interface menuOpenBoxDef {
  (isMenuOpen: boolean): SerializedStyles;
}

export const menuOpenBox: menuOpenBoxDef = (isMenuOpen) => {
  return css`
    width: 100px;
    min-height: 100px;
    background-color: ${COLORS.GRAY100};
    border-radius: 2rem;
    margin-bottom: 1rem;
    display: flex;
    font-size: 2rem;
    color: ${isMenuOpen ? COLORS.GRAY70 : COLORS.GRAY40};
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
};

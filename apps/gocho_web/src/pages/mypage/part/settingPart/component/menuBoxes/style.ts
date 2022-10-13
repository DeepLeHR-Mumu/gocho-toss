import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

interface ButtonWrapperDef {
  (isCurrentMenu: boolean): SerializedStyles;
}
export const buttonWrapper: ButtonWrapperDef = (isCurrentMenu) => {
  return css`
    width: 5rem;
    height: 5rem;
    background-color: ${COLORS.GRAY100};
    color: ${isCurrentMenu ? COLORS.BLUE_FIRST40 : COLORS.GRAY40};
    border-radius: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;

    > svg {
      font-size: 2rem;
    }

    ${PC_HOVER} {
      :hover {
        background-color: ${COLORS.BLUE_FIRST40};
        color: ${COLORS.GRAY100};
        transform: translate(0, -4px);
      }
    }
  `;
};

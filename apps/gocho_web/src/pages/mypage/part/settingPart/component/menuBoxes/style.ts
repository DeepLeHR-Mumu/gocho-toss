import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

interface boxWrapperDef {
  (isCurrentMenu: boolean): SerializedStyles;
}
export const boxWrapper: boxWrapperDef = (isCurrentMenu) => {
  return css`
    width: 100px;
    height: 100px;
    background-color: ${COLORS.GRAY100};
    color: ${isCurrentMenu ? COLORS.BLUE_FIRST40 : COLORS.GRAY40};
    border-radius: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: all 0.3s ease;
    p {
      margin-top: 0.2rem;
      font-size: 1rem;
      color: ${COLORS.BLUE_FIRST40};
      display: ${isCurrentMenu ? "block" : "none"};
    }
    ${PC_HOVER} {
      :hover {
        background-color: ${COLORS.BLUE_FIRST40};
        color: ${COLORS.GRAY100};
        transform: translate(0, -4px);
        p {
          display: block;
          color: white;
        }
      }
    }
  `;
};

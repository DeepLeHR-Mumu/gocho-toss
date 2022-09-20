import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";

interface WrapperDef {
  (wide: boolean): SerializedStyles;
}
export const wrapper: WrapperDef = (wide) => {
  return css`
    width: ${wide === true ? "100%" : "fit-content"};
    background-color: ${COLORS.GRAY90};
    padding: 0.4rem 2rem;
    border-radius: 1.5rem;
  `;
};

export const specStrCSS = css`
  color: ${COLORS.GRAY10};
  font-weight: 400;
  font-size: 0.875rem;
`;

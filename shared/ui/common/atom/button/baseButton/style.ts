import { css, SerializedStyles } from "@emotion/react";

import { ColorDef } from "@sharedType/style/color";
import { COLORS } from "@sharedStyle/color";
import { PC_HOVER } from "@sharedStyle/mediaQuery";

import { ButtonVariant } from "./type";

interface VariantModifierDef {
  (variant: ButtonVariant): SerializedStyles;
}

export const variantModifier: VariantModifierDef = (variant) => {
  if (variant === "filled")
    return css`
      background-color: ${COLORS.BLUE_FIRST40};
      transition: all ease 0.2s;
      color: ${COLORS.GRAY100};
      ${PC_HOVER} {
        &:hover {
          background-color: ${COLORS.BLUE_FIRST50};
        }
      }
    `;
  if (variant === "outlined")
    return css`
      color: ${COLORS.BLUE_FIRST40};
      transition: all ease 0.2s;
      border: 1px solid ${COLORS.BLUE_FIRST40};
      ${PC_HOVER} {
        &:hover {
          background-color: ${COLORS.BLUE_SECOND40};
        }
      }
    `;
  return css`
    color: ${COLORS.BLUE_FIRST40};
    transition: all ease 0.2s;
    ${PC_HOVER} {
      &:hover {
        background-color: ${COLORS.BLUE_SECOND40};
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
      }
    }
  `;
};

interface ButtonCSSDef {
  (variant: ButtonVariant, wide: boolean | undefined, iconDirection?: "left" | "right"): SerializedStyles;
}
export const buttonCSS: ButtonCSSDef = (variant, wide, iconDirection) => {
  return css`
    ${wide &&
    css`
      width: 100%;
    `}
    padding: 0.875rem 1.5rem;
    border-radius: 1.5rem;
    font-size: 0.875rem;
    ${variantModifier(variant)}
    display: flex;

    ${iconDirection === "right" &&
    css`
      flex-direction: row-reverse;
    `};
    > span {
      margin-left: 0.2rem;
      margin-right: 0.1rem;
    }
  `;
};

interface iconCSSDef {
  (size: number, color: ColorDef): SerializedStyles;
}
export const iconCSS: iconCSSDef = (size, color) => {
  return css`
    font-size: ${size}rem;
    color: ${color};
    margin-left: 0.2rem;
  `;
};

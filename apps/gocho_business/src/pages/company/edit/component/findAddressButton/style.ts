import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { ColorDef } from "shared-type/style/color";

export const cssObj = {
  wrapper: (color: ColorDef, isDisabled?: boolean) => css`
    background-color: ${isDisabled ? COLORS.GRAY65 : color};
    border-radius: 1.5rem;
    height: 2.5rem;
    padding: 0 0.75rem;
    display: flex;
    align-items: center;
    width: fit-content;
  `,
  icon: (isDisabled?: boolean) => css`
    display: flex;
    color: ${isDisabled ? COLORS.GRAY100 : COLORS.GRAY10};
    align-items: center;
    margin-right: 0.75rem;
  `,
  text: (isDisabled?: boolean) => css`
    color: ${isDisabled ? COLORS.GRAY100 : COLORS.GRAY10};
  `,
};

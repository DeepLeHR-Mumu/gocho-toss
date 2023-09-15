import { css } from "@emotion/react";
import { buttonColor } from "../style/color";

import { ButtonProps } from "./type";
import { cssObj } from "./style";

export const Button = ({ size, color = "active", fill, children, ...props }: ButtonProps) => (
  <button
    type="button"
    css={css`
      ${cssObj.buttonWrapper(size, fill)}${buttonColor[color]}
    `}
    {...props}
    disabled={color === "disable"}
  >
    {children}
  </button>
);

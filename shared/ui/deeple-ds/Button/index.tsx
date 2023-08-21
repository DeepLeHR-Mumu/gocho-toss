import { css } from "@emotion/react";
import { buttonColor } from "../style/color";

import { ButtonProps } from "./type";
import { cssObj } from "./style";

const Button = ({ size, color = "active", fill, children, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    css={css`
      ${cssObj.buttonWrapper(size, fill)}${buttonColor[color]}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;

import { css } from "@emotion/react";
import { borderBackgroundColor } from "deeple-ds/style/color";

import { ButtonProps } from "./type";
import { cssObj } from "./style";

const Button = ({ type = "button", size, color = "fillMain", children, onClick }: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    css={css`
      ${cssObj.default}${size ? cssObj[size] : ""}${borderBackgroundColor[color]}
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

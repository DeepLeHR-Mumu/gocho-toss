import { css } from "@emotion/react";
import { borderBackgroundColor } from "../style/color";

import { ButtonProps } from "./type";
import { cssObj } from "./style";

const Button = ({ size, color = "fillMain", children, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    css={css`
      ${cssObj.default}${size ? cssObj[size] : ""}${borderBackgroundColor[color]}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;

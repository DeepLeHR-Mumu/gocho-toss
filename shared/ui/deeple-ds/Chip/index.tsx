import { css } from "@emotion/react";

import { chipColor } from "../style/color";

import { ChipProps } from "./type";
import { cssObj } from "./style";

const Chip = ({ color = "nonSelected", children, ...props }: ChipProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    css={css`
      ${cssObj.chip}${chipColor[color]}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Chip;

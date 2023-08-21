import { css } from "@emotion/react";

import { chipColor } from "../style/color";

import { ChipProps } from "./type";
import { cssObj } from "./style";

const Chip = ({ size, color = "nonSelected", children, ...props }: ChipProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    css={css`
      ${cssObj.chipWrapper(size)}${chipColor[color]}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Chip;

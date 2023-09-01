import { css } from "@emotion/react";

import { chipColor } from "../style/color";

import { ChipProps } from "./type";
import { cssObj } from "./style";

export const Chip = ({ size, color = "nonSelected", children, rect, ...props }: ChipProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    css={css`
      ${cssObj.chipWrapper(size)}${chipColor[color]}${rect && cssObj.rect}
    `}
    {...props}
  >
    {children}
  </button>
);

import { css } from "@emotion/react";

import { dDayChipColor } from "../style/color";

import { DDayChipProps } from "./type";
import { cssObj } from "./style";

const Chip = ({ color = "fillBlue", children }: DDayChipProps) => (
  // eslint-disable-next-line react/button-has-type
  <div
    css={css`
      ${cssObj.dDayChip}${dDayChipColor[color]}
    `}
  >
    {children}
  </div>
);

export default Chip;

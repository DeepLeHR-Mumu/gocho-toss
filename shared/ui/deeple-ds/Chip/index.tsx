import { css } from "@emotion/react";

import { borderBackgroundColor } from "deeple-ds/style/color";

import { ChipProps } from "./type";
import { cssObj } from "./style";

const Chip = ({ children, color = "fillMain", size }: ChipProps) => (
  <div
    css={css`
      ${cssObj.default}${borderBackgroundColor[color]}${size ? cssObj[size] : ""}
    `}
  >
    {children}
  </div>
);

export default Chip;

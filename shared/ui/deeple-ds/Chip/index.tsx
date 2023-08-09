import { css } from "@emotion/react";

import { borderBackgroundColor } from "deeple-ds/style/color";

import { ChipProps } from "./type";
import { cssObj } from "./style";

const Chip = ({ children, color = "fillMain", size, optional }: ChipProps) => (
  <div
    css={css`
      ${cssObj.default}${borderBackgroundColor[color]}${size ? cssObj[size] : ""}${optional ? cssObj[optional] : ""}
    `}
  >
    {children}
  </div>
);

export default Chip;

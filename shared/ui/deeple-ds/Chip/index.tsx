import { css } from "@emotion/react";

import { borderBackgroundColor } from "../style/color";

import { ChipProps } from "./type";
import { cssObj } from "./style";

const Chip = ({ children, color = "fillMain", size = "withIcon" }: ChipProps) => (
  <div
    css={css`
      ${borderBackgroundColor[color]}${size ? cssObj[size] : ""}
    `}
  >
    {children}
  </div>
);

export default Chip;

import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonStatusChipProps } from "./type";

export const CommonStatusChip: FunctionComponent<CommonStatusChipProps> = ({ status }) => (
  <div css={cssObj.wrapper}>{status}</div>
);

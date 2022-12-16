import { FunctionComponent } from "react";

import { wrapper } from "./style";
import { CommonStatusChipProps } from "./type";

export const CommonStatusChip: FunctionComponent<CommonStatusChipProps> = ({ status }) => (
  <div css={wrapper}>{status}</div>
);

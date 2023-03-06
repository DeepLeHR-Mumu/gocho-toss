import { FunctionComponent } from "react";

import { dDayCalculator } from "shared-util";

import { DdayBoxProps } from "./type";
import { setDdayStyleCSS } from "./style";

export const DdayBox: FunctionComponent<DdayBoxProps> = ({ endTime }) => (
  <div css={setDdayStyleCSS(endTime)}>{dDayCalculator(endTime)}</div>
);

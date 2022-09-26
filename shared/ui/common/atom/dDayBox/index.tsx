import { FunctionComponent } from "react";

import { dDayCalculator } from "shared-util/date";

import { DdayBoxProps } from "./type";
import { setDdayStyleCSS } from "./style";

export const DdayBox: FunctionComponent<DdayBoxProps> = ({ endTime }) => {
  return <div css={setDdayStyleCSS(endTime)}>{dDayCalculator(endTime)}</div>;
};

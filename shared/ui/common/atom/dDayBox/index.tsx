import { FunctionComponent } from "react";

import { dDayCalculator } from "@sharedUtil/date";

import { setDdayStyleCSS } from "./style";

interface DdayBoxProps {
  endTime: number;
}

export const DdayBox: FunctionComponent<DdayBoxProps> = ({ endTime }) => {
  return <div css={setDdayStyleCSS(endTime)}>{dDayCalculator(endTime)}</div>;
};

import { FunctionComponent } from "react";
import dayjs from "dayjs";

import { dDayCalculator, dateConverter } from "shared-util";

import { DdayBoxProps } from "./type";
import { setDdayStyleCSS } from "./style";

export const DdayBox: FunctionComponent<DdayBoxProps> = ({ endTime }) => {
  const { year } = dateConverter(endTime);
  const today = dayjs();
  const expired = dayjs(endTime);
  const result = expired.diff(today, "day", true);
  const dDay = Math.floor(result);

  return (
    <div
      css={setDdayStyleCSS({
        dDay,
        year,
      })}
    >
      {dDayCalculator(endTime)}
    </div>
  );
};

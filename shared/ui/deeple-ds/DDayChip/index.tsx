import { dateConverter, dDayCalculator } from "shared-util";
import dayjs from "dayjs";

import { DDayChipProps } from "./type";
import { cssObj } from "./style";

export const DDayChip = ({ endTime }: DDayChipProps) => {
  const { year } = dateConverter(endTime);
  const today = dayjs();
  const expired = dayjs(endTime);
  const result = expired.diff(today, "day", true);
  const dDay = Math.floor(result);

  return (
    // eslint-disable-next-line react/button-has-type
    <div css={cssObj.dDayChip(dDay, year)}>{dDayCalculator(endTime)}</div>
  );
};

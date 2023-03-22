import { FunctionComponent } from "react";

import { inputBox } from "./style";
import { DatetimeBoxProps } from "./type";

export const DatetimeBox: FunctionComponent<DatetimeBoxProps> = ({ register, valueName }) => (
  <input
    css={inputBox}
    type="datetime-local"
    {...register(valueName, {
      required: true,
    })}
  />
);

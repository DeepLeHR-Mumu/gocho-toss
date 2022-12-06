import { FunctionComponent } from "react";

import { inputBox } from "./style";
import { DatetimeBoxProps } from "./type";

export const DatetimeBox: FunctionComponent<DatetimeBoxProps> = ({ register, valueName }) => {
  return (
    <input
      css={inputBox}
      type="datetime-local"
      {...register(valueName, {
        required: true,
        setValueAs: (d: Date) => {
          const date = new Date(d);
          return date.getTime();
        },
      })}
    />
  );
};

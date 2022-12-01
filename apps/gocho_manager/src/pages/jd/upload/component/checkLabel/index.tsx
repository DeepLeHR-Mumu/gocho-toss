import { FunctionComponent } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { inputLabel } from "./style";
import { CheckLabelProps } from "./type";

export const CheckLabel: FunctionComponent<CheckLabelProps> = ({ register, field, value, index, watch }) => {
  return (
    <label css={inputLabel} htmlFor={`${value}${index}`}>
      <input
        type="radio"
        value={value}
        id={`${value}${index}`}
        {...register(`position_arr.${index}.${field}`, {
          required: true,
        })}
      />
      <CheckBox isChecked={watch === value} />
      {value}
    </label>
  );
};

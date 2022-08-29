import { FunctionComponent, useState } from "react";

import { NumberInputFormProps } from "./type";
import {
  numberInputCSS,
  numberInputLabelCSS,
  labelFirstDesc,
  labelLastDesc,
} from "./style";

export const NumberInputForm: FunctionComponent<NumberInputFormProps> = ({
  firstDesc,
  lastDesc,
  id,
  registerObj,
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label
      css={numberInputLabelCSS(isFocus)}
      htmlFor={id}
      onFocus={() => {
        return setIsFocus(true);
      }}
      onBlur={() => {
        return setIsFocus(false);
      }}
    >
      <p css={labelFirstDesc(isFocus)}>{firstDesc}</p>
      <input
        css={numberInputCSS(isFocus)}
        type="number"
        id={id}
        placeholder={placeholder}
        {...registerObj}
      />
      <p css={labelLastDesc(isFocus)}>{lastDesc}</p>
    </label>
  );
};

import { FunctionComponent, useState } from "react";
import { FiCheck } from "react-icons/fi";

import { CheckBoxWithDescProps } from "./type";
import { cssObj } from "./style";

export const CheckBoxWithDesc: FunctionComponent<CheckBoxWithDescProps> = ({
  registerObj,
  isDisabled = false,
  desc,
  id,
  value,
  checked,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label htmlFor={id} css={cssObj.label(isFocus)}>
      <input
        type="checkbox"
        css={cssObj.input}
        {...registerObj}
        checked={checked}
        id={id}
        value={value && value}
        disabled={isDisabled}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
      <div css={cssObj.checkBox(isDisabled)}>
        <FiCheck />
      </div>
      <p css={cssObj.desc}>{desc}</p>
    </label>
  );
};

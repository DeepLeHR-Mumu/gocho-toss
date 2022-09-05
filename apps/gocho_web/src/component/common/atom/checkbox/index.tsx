import { FunctionComponent } from "react";

import { CheckBoxProps } from "./type";
import { labelCSS, inputCSS } from "./style";

export const CheckBox: FunctionComponent<CheckBoxProps> = ({ type, registerObj, value, text, checked }) => {
  return (
    <>
      <input css={inputCSS} type={type} value={value} id={value} checked={checked} {...registerObj} />
      <label css={labelCSS} htmlFor={value}>
        <p>{text}</p>
      </label>
    </>
  );
};

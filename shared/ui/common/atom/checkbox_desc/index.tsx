import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";

import { CheckBoxWithDescProps } from "./type";
import { cssObj } from "./style";

export const CheckBoxWithDesc: FunctionComponent<CheckBoxWithDescProps> = ({
  registerObj,
  isDisabled = false,
  desc,
  id,
  checked,
}) => (
  <label htmlFor={id} css={cssObj.label}>
    <input type="checkbox" css={cssObj.input} {...registerObj} checked={checked} id={id} disabled={isDisabled} />
    <div css={cssObj.checkBox(isDisabled)}>
      <FiCheck />
    </div>
    <p css={cssObj.desc}>{desc}</p>
  </label>
);

import { FunctionComponent } from "react";

import { SharedRadioButtonProps } from "./type";
import { cssObj } from "./style";

export const SharedRadioButton: FunctionComponent<SharedRadioButtonProps> = ({
  value,
  isDisabled = false,
  registerObj,
  id,
  children,
}) => (
  <label htmlFor={id} css={cssObj.label}>
    <input type="radio" id={id} css={cssObj.radio} {...registerObj} value={value} disabled={isDisabled} />
    <div css={cssObj.radioBox(isDisabled)} />
    {children}
  </label>
);

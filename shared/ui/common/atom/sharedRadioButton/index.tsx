import { FunctionComponent } from "react";

import { SharedRadioButtonProps } from "./type";
import { cssObj } from "./style";

export const SharedRadioButton: FunctionComponent<SharedRadioButtonProps> = ({ value, registerObj, id, children }) => (
  <label htmlFor={id} css={cssObj.label}>
    <input type="radio" id={id} css={cssObj.radio} {...registerObj} value={value} />
    <div css={cssObj.radioBox} />
    {children}
  </label>
);

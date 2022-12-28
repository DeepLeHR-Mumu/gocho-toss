import { FunctionComponent } from "react";

import { CommonRadioButtonProps } from "./type";
import { cssObj } from "./style";

export const SharedRadioButton: FunctionComponent<CommonRadioButtonProps> = ({ value, registerObj, desc }) => {
  const id = `${registerObj.name}_${desc.replace(/\s/g, "")}`;

  return (
    <label htmlFor={id} css={cssObj.label}>
      <input type="radio" id={id} css={cssObj.radio} {...registerObj} value={value} />
      <div css={cssObj.checkBox} />
      <p css={cssObj.desc}>{desc}</p>
    </label>
  );
};

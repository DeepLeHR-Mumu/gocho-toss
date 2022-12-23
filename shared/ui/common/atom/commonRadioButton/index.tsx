import { FunctionComponent } from "react";

import { CommonRadioButtonProps } from "./type";
import { cssObj } from "./style";

export const CommonRadioButton: FunctionComponent<CommonRadioButtonProps> = ({ registerObj, desc }) => {
  const id = `${registerObj.name}_${desc.replace(/\s/g, "")}`;

  return (
    <label htmlFor={id} css={cssObj.label}>
      <input type="radio" id={id} css={cssObj.radio} {...registerObj} />
      <div css={cssObj.checkBox} />
      <p css={cssObj.desc}>{desc}</p>
    </label>
  );
};

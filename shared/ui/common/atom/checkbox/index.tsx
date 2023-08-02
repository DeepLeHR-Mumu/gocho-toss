import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";

import { CheckBoxProps } from "./type";
import { cssObj } from "./style";

export const CheckBox: FunctionComponent<CheckBoxProps> = ({ isChecked }) => (
  <div css={cssObj.check(isChecked)}>{isChecked && <FiCheck />}</div>
);

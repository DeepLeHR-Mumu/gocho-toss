import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";

import { CheckBoxProps } from "./type";
import { checkCSS } from "./style";

export const CheckBox: FunctionComponent<CheckBoxProps> = ({ isChecked }) => (
  <div css={checkCSS}>{isChecked && <FiCheck />}</div>
);

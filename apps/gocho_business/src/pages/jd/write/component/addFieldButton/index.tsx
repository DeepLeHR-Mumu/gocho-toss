import { FunctionComponent } from "react";
import { FiPlus } from "react-icons/fi";

import { AddFieldButtonProps } from "./type";
import { cssObj } from "./style";

export const AddFieldButton: FunctionComponent<AddFieldButtonProps> = ({ onClickHandler, text, disabled }) => (
  <button type="button" css={cssObj.addFieldButton} onClick={onClickHandler} disabled={disabled}>
    <FiPlus />
    {text}
  </button>
);

import { FunctionComponent } from "react";
import { FiPlus } from "react-icons/fi";

import { AddFieldButtonProps } from "./type";
import { cssObj } from "./style";

export const AddFieldButton: FunctionComponent<AddFieldButtonProps> = ({ onClickHandler, text }) => (
  <button type="button" css={cssObj.addInputButton} onClick={onClickHandler}>
    <FiPlus />
    {text}
  </button>
);

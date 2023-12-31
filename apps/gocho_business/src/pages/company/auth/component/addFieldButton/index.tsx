import { FunctionComponent } from "react";
import { FiPlus } from "react-icons/fi";

import { AuthAddFieldButtonProps } from "./type";
import { cssObj } from "./style";

export const AddFieldButton: FunctionComponent<AuthAddFieldButtonProps> = ({ state, onClickHandler, text }) => (
  <button type="button" css={cssObj.addFieldButton(state)} onClick={onClickHandler}>
    <FiPlus />
    {text}
  </button>
);

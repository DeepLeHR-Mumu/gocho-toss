import { FunctionComponent } from "react";
import { FiMinus } from "react-icons/fi";

import { cssObj } from "./style";
import { DeleteInputButtonProps } from "./type";

export const DeleteInputButton: FunctionComponent<DeleteInputButtonProps> = ({ onClickHandler }) => (
  <button type="button" css={cssObj.deleteInputButton} onClick={onClickHandler}>
    <FiMinus />
  </button>
);

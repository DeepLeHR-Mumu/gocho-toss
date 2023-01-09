import { FunctionComponent } from "react";
import { GuideChipProps } from "./type";
import { cssObj } from "./style";

export const GuideChip: FunctionComponent<GuideChipProps> = ({ text, onClickHandler }) => (
  <button css={cssObj.container} type="button" onMouseDown={onClickHandler}>
    <span>🏷️{text}</span>
  </button>
);

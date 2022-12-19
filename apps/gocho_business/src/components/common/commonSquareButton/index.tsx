import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonSquareButtonProps } from "./type";

export const CommonSquareButton: FunctionComponent<CommonSquareButtonProps> = ({
  text,
  iconObj,
  onClickHandler,
  backgroundColor,
  fontColor,
  borderColor,
}) => (
  <button type="button" onClick={onClickHandler} css={cssObj.wrapper(backgroundColor, borderColor, fontColor)}>
    {iconObj?.location === "left" && (
      <div css={cssObj.icon("left")}>
        <iconObj.Icon />
      </div>
    )}
    <p css={cssObj.text}>{text}</p>
    {iconObj?.location === "right" && (
      <div css={cssObj.icon("right")}>
        <iconObj.Icon />
      </div>
    )}
  </button>
);

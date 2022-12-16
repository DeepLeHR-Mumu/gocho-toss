import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonSquareButtonProps } from "./type";

export const CommonSquareButton: FunctionComponent<CommonSquareButtonProps> = ({
  text,
  iconObj,
  onClickHandler,
  backgroundColor,
  borderColor,
}) => (
  <button type="button" onClick={onClickHandler} css={cssObj.wrapper(backgroundColor, borderColor)}>
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

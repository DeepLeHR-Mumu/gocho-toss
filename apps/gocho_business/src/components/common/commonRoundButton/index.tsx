import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonRoundButtonProps } from "./type";

export const CommonRoundButton: FunctionComponent<CommonRoundButtonProps> = ({
  text,
  Icon,
  backgoundColor,
  fontColor,
  onClickHandler,
}) => (
  <button type="button" css={cssObj.wrapper(backgoundColor)} onClick={onClickHandler}>
    {Icon && (
      <div css={cssObj.icon(fontColor)}>
        <Icon />
      </div>
    )}
    <p css={cssObj.text(fontColor)}>{text}</p>
  </button>
);

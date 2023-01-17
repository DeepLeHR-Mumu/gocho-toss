import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonRoundButtonProps } from "./type";

export const CommonRoundButton: FunctionComponent<CommonRoundButtonProps> = ({
  text,
  Icon,
  backgroundColor,
  onClickHandler,
}) => (
  <button type="button" css={cssObj.wrapper(backgroundColor)} onClick={onClickHandler}>
    {Icon && (
      <div css={cssObj.icon}>
        <Icon />
      </div>
    )}
    <p css={cssObj.text}>{text}</p>
  </button>
);

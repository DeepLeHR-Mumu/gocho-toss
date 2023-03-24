import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { FindAddresButtonProps } from "./type";

export const FindAddressButton: FunctionComponent<FindAddresButtonProps> = ({
  text,
  Icon,
  isDisabled,
  backgroundColor,
  onClickHandler,
}) => (
  <button
    type="button"
    css={cssObj.wrapper(backgroundColor, isDisabled)}
    onClick={onClickHandler}
    disabled={isDisabled}
  >
    {Icon && (
      <div css={cssObj.icon(isDisabled)}>
        <Icon />
      </div>
    )}
    <p css={cssObj.text(isDisabled)}>{text}</p>
  </button>
);

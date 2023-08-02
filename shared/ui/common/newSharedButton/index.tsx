import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { SharedButtonProps } from "./type";

export const NewSharedButton: FunctionComponent<SharedButtonProps> = ({
  buttonType,
  width,
  isMobile,
  isLong,
  text,
  onClickHandler,
}) => (
  <button
    type={onClickHandler !== "submit" ? "button" : "submit"}
    onClick={onClickHandler === "submit" ? undefined : onClickHandler}
    css={cssObj.buttonWrapper(buttonType, isMobile, isLong, width)}
    disabled={buttonType === "disabled"}
  >
    {text}
  </button>
);

import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { SharedButtonProps } from "./type";
import { sizeConverter } from "./util";

export const SharedButton: FunctionComponent<SharedButtonProps> = ({
  radius,
  borderColor,
  fontColor,
  iconObj,
  backgroundColor,
  isFullWidth,
  isDisabled,
  size,
  text,
  onClickHandler,
}) => {
  const { labelFontSize, labelFontWeight, heightPadding } = sizeConverter(size);

  return (
    <button
      type={onClickHandler !== "submit" ? "button" : "submit"}
      onClick={onClickHandler === "submit" ? undefined : onClickHandler}
      css={cssObj.wrapper(radius, backgroundColor, borderColor, isFullWidth, isDisabled)}
      disabled={isDisabled}
    >
      <div css={cssObj.container(heightPadding)}>
        {iconObj && iconObj.location === "left" && (
          <div css={cssObj.icon(fontColor, "left", isDisabled)}>
            <iconObj.icon />
          </div>
        )}
        {text && <p css={cssObj.text(labelFontWeight, fontColor, labelFontSize, isDisabled)}>{text}</p>}
        {iconObj && iconObj.location === "right" && (
          <div css={cssObj.icon(fontColor, "right", isDisabled)}>
            <iconObj.icon />
          </div>
        )}
      </div>
    </button>
  );
};

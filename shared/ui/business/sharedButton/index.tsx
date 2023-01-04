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
  size,
  text,
  onClickHandler,
}) => {
  const { labelFontSize, labelFontWeight, heightPadding } = sizeConverter(size);

  return (
    <button
      type={onClickHandler !== "submit" ? "button" : "submit"}
      onClick={onClickHandler === "submit" ? undefined : onClickHandler}
      css={cssObj.wrapper(radius, backgroundColor, borderColor, isFullWidth)}
    >
      <div css={cssObj.container(heightPadding)}>
        {iconObj && iconObj.location === "left" && (
          <div css={cssObj.icon(fontColor, "left")}>
            <iconObj.icon />
          </div>
        )}
        {text && <p css={cssObj.text(labelFontWeight, fontColor, labelFontSize)}>{text}</p>}
        {iconObj && iconObj.location === "right" && (
          <div css={cssObj.icon(fontColor, "right")}>
            <iconObj.icon />
          </div>
        )}
      </div>
    </button>
  );
};

import { FunctionComponent } from "react";
import Link from "next/link";

import { cssObj } from "./style";
import { CommonSquareButtonProps, CommonSquareLinkProps } from "./type";

export const CommonSquareButton: FunctionComponent<CommonSquareButtonProps | CommonSquareLinkProps> = ({
  text,
  link,
  iconObj,
  onClickHandler,
  backgroundColor,
  fontColor,
  borderColor,
}) => {
  if (link) {
    return (
      <Link href={link} passHref css={cssObj.wrapper(backgroundColor, borderColor, fontColor)}>
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
      </Link>
    );
  }
  return (
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
};
